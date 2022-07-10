package nl.lengrand.pluckr

import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.metrics.micrometer.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.callloging.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import kotlinx.serialization.json.Json
import net.postgis.jdbc.geometry.Point
import nl.lengrand.pluckr.plugins.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

fun Application.myapp(){

    val database = initDb()

    install(CORS)
    install(ContentNegotiation){
        json(Json {
            prettyPrint = true
            isLenient = true
        })
    }
    install(CallLogging)
//    install(MicrometerMetrics)

    configureRouting(database)
}

fun initDb(): Database {
    val database = Database.connect("jdbc:postgresql://localhost:5432/pluckr", driver = "org.postgresql.Driver",
        user = "pluckr", password = System.getenv("PLUCKR_PASSWORD"))

    transaction {
        addLogger(StdOutSqlLogger)

        SchemaUtils.create(Trees)

//        val first = Tree.new {
//            name = "Laurier"
//            description = "un laurier accessible à tous"
//            location = Point(52.04681865145196, 5.079779509938945)
//        }

//        Trees.insert {
//            it[name] = "Laurier 2"
//            it[description] = "un laurier accessible à tous"
//            it[location] = Point(52.04681865145196, 5.079779509938945)
//        }


//        println("Trees: ${Tree.all().joinToString {it.location.value}}")

    }
    return database
}

fun main() {
    embeddedServer(
        Netty,
        module =  Application::myapp,
        port = 9090,
        host = "0.0.0.0")
        .start(wait = true)
}
