package nl.lengrand.pluckr

import net.postgis.jdbc.PGgeometry
import net.postgis.jdbc.geometry.Point
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ColumnType
import org.jetbrains.exposed.sql.Table

object Trees : IntIdTable() {
    val name  = varchar("name", 100)
    val description  = text("description")
    val location = point("location")
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

class Tree(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Tree>(Trees)

    var name by Trees.name
    var description by Trees.description
    var location by Trees.location
}