package nl.lengrand.pluckr

import UserSession
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.callloging.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.response.*
import io.ktor.server.sessions.*
import kotlinx.serialization.json.Json
import nl.lengrand.pluckr.plugins.configureRouting
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction

fun Application.module() {

    val database = initDb()

    install(Sessions) {
        cookie<UserSession>("user_session", SessionStorageMemory()) {
            cookie.path = "/"
            cookie.maxAgeInSeconds = 6000
        }
    }

    install(Authentication) {
        session<UserSession>("user_session") {
            println("validating session!")

            validate { session ->
                if (session.name.isNotEmpty()) {
                    println("Valid!")
                    println(session)
                    session
                } else {
                    println("Not valid!")
                    println(session)
                    null
                }
            }
            challenge {
                println("redirecting")
                call.respondRedirect("/")
            }
        }
    }

//    install(CORS)
    install(ContentNegotiation) {
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
    val database = Database.connect(
        "jdbc:postgresql://localhost:5432/pluckr", driver = "org.postgresql.Driver",
        user = "pluckr", password = System.getenv("PLUCKR_PASSWORD")
    )

    transaction {
        addLogger(StdOutSqlLogger)
        SchemaUtils.create(Trees, Users)
    }
    return database
}

fun main() {
    embeddedServer(
        Netty,
        port = 9090,
        host = "0.0.0.0"
    ){
        module()
    }
        .start(wait = true)
}
