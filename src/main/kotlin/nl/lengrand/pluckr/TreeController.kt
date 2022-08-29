import io.ktor.server.auth.*
import kotlinx.serialization.KSerializer
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import net.postgis.jdbc.geometry.Point
import nl.lengrand.pluckr.Trees
import org.jetbrains.exposed.sql.transactions.transaction
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.toKotlinLocalDateTime
import nl.lengrand.pluckr.Users
import org.jetbrains.exposed.sql.*
import org.mindrot.jbcrypt.BCrypt.*

@Serializable
data class UserSession(val name: String) : Principal

@Serializable
data class User(
    val id: Int? = null,
    val username: String,
    val password: String,
    val createdAt: LocalDateTime,
    val updatedAt: LocalDateTime,
)

@Serializable
data class Tree(
    val id: Int? = null,
    val name: String,
    val description: String?,
    @Serializable(with = PointSerializer::class)
    val location: Point
)

@Serializable
@SerialName("Point")
private class PointSurrogate(val srid: Int, val x: Double, val y: Double)

object PointSerializer : KSerializer<Point> {
    override val descriptor: SerialDescriptor = PointSurrogate.serializer().descriptor

    override fun serialize(encoder: Encoder, value: Point) {
        val surrogate = PointSurrogate(value.srid, value.x, value.y)
        encoder.encodeSerializableValue(PointSurrogate.serializer(), surrogate)
    }

    override fun deserialize(decoder: Decoder): Point {
        val surrogate = decoder.decodeSerializableValue(PointSurrogate.serializer())
        return Point(surrogate.x, surrogate.y)
    }
}

private fun ResultRow.toTree(): Tree {
    return Tree(this[Trees.id], this[Trees.name], this[Trees.description], this[Trees.location])
}

private fun ResultRow.toUser(): User {
    return User(
        this[Users.id],
        this[Users.username],
        this[Users.password],
        this[Users.createdAt].toKotlinLocalDateTime(),
        this[Users.updatedAt].toKotlinLocalDateTime()
    )
}

class UserController(private val database: Database) {
    fun createUser(email: String, zepassword: String) {
        val salt = gensalt()
        transaction(database) {
            Users.insert {
                it[username] = email
                it[password] = hashpw(zepassword, salt);
            }
        }
    }

    /*
    Will throw NoSuchElementException if there are no results, or IllegalArgumentException if there are more than one
     */
    private fun getUser(email: String): User {
        val user = transaction(database) {
            Users.select { Users.username eq email }.single().toUser()
        }
        return user
    }

    fun getUser(email: String, zepassword: String): User {
        val user = getUser(email)
        if (!checkpw(zepassword, user.password)) throw AuthenticationException("Incorrect password detected")
        return user
    }
}

class TreeController(private val database: Database) {
    fun getTrees(): ArrayList<Tree> {
        val trees: ArrayList<Tree> = arrayListOf()
        transaction(database) {
            Trees.selectAll().map { trees.add(it.toTree()) }
        }
        return trees
    }

    fun getTrees(bbox: List<Double>?): ArrayList<Tree> {
        return getTrees()
    }
}

class AuthenticationException(message: String) : Exception(message)
