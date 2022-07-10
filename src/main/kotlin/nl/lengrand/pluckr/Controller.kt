import kotlinx.serialization.KSerializer
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import net.postgis.jdbc.geometry.Point
import nl.lengrand.pluckr.Trees
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction

@Serializable
data class Tree(
    val id: Int? = null,
    val name: String,
    val description: String?,
    @Serializable(with = PointSerializer::class)
    val location : Point
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

private fun fromRow(it: ResultRow): Tree {
    return Tree(it[Trees.id], it[Trees.name], it[Trees.description], it[Trees.location])
}

class Controller(private val database: Database) {

    fun getTrees() : ArrayList<Tree> {
        val trees : ArrayList<Tree> = arrayListOf()
        transaction(database){
            Trees.selectAll().map { trees.add(fromRow(it)) }
        }
        return trees
    }

    fun getTrees(bbox: List<Double>?) : ArrayList<Tree> {
        println(bbox)
        return getTrees()
    }
}