package nl.lengrand.pluckr

import UserSession
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
import io.ktor.server.metrics.micrometer.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.callloging.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.response.*
import io.ktor.server.sessions.*
import kotlinx.serialization.json.Json
import net.postgis.jdbc.geometry.Point
import nl.lengrand.pluckr.plugins.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.mindrot.jbcrypt.BCrypt
import org.mindrot.jbcrypt.BCrypt.*

fun Application.myapp(){

    val database = initDb()

    install(Sessions) {
        cookie<UserSession>("user_session") {
            cookie.path = "/"
            cookie.maxAgeInSeconds = 6000
        }
    }

    install(Authentication) {
        session<UserSession>("auth-session") {
            validate { session ->
                if(session.name.startsWith("jet")) {
                    session
                } else {
                    null
                }
            }
            challenge {
                call.respondRedirect("/login")
            }
        }
    }

//    install(CORS)
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

        SchemaUtils.create(Trees, Users)

//        val salt = gensalt()
//        println(salt)
//        val user = Users.insert {
//            it[username] = "bobby2@gmail.com"
//            it[password] = hashpw("aVerySecretPassword", salt);
//        }

//        Users.selectAll().map {
//            println("${it[Users.username]}, ${it[Users.password]}, ${it[Users.createdAt]}, ${it[Users.updatedAt]}")
////            if (checkpw("booby", it[Users.password]))
////                println("It matches");
////            else
////                println("It does not match");
//            println("-----")
//        }

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
