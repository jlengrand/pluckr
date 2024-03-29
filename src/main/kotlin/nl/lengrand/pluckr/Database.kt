package nl.lengrand.pluckr

import net.postgis.jdbc.PGgeometry
import net.postgis.jdbc.geometry.Point
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ColumnType
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime

object Trees : Table() {
    val id = integer("id").autoIncrement()
    val name  = varchar("name", 100)
    val description  = text("description")
    val location = point("location")

    override val primaryKey = PrimaryKey(id) // name is optional here
}

object Users: Table() {
    val id = integer("id").autoIncrement()
    val username = varchar("username", 100).uniqueIndex()
    val password = varchar("password", 100)
    val createdAt = datetime("created_at").clientDefault{ LocalDateTime.now() }
    val updatedAt = datetime("updatedAt").clientDefault{ LocalDateTime.now() }
}

fun Table.point(name: String, srid: Int = 4326): Column<Point>
        = registerColumn(name, PointColumnType())

private class PointColumnType(val srid: Int = 4326): ColumnType() {
    override fun sqlType() = "GEOMETRY(Point, $srid)"

    override fun valueFromDB(value: Any) = if (value is PGgeometry) value.geometry else value

    override fun notNullValueToDB(value: Any): Any {
        if (value is Point) {
            if (value.srid == Point.UNKNOWN_SRID) value.srid = srid
            return PGgeometry(value)
        }
        return value
    }
}

//class Tree(id: EntityID<Int>) : IntEntity(id) {
//    companion object : IntEntityClass<Tree>(Trees)
//
//    var name by Trees.name
//    var description by Trees.description
//    var location by Trees.location
//}