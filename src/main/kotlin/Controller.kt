import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
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

object PointSerializer : KSerializer<Point> {
    override val descriptor = PrimitiveSerialDescriptor("Point", PrimitiveKind.STRING)

    override fun deserialize(decoder: Decoder): Point {
        return Point(decoder.decodeString())
    }

    override fun serialize(encoder: Encoder, value: Point) {
        encoder.encodeString(value.toString())
    }

}


private fun fromRow(it: ResultRow): Tree {
    return Tree(it[Trees.id], it[Trees.name], it[Trees.description], it[Trees.location])
}

class Controller(private val database: Database) {

    fun getTrees() : ArrayList<Tree> {
        println("CALLED")
        val trees : ArrayList<Tree> = arrayListOf()

        transaction(database){
            Trees.selectAll().map { trees.add(fromRow(it)) }
        }

        println(trees)

        return trees
    }
}