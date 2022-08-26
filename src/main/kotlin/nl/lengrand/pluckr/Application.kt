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
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import kotlinx.serialization.json.Json
import nl.lengrand.pluckr.plugins.configureRouting
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction

fun Application.module() {
    val env = environment.config.propertyOrNull("ktor.environment")?.getString()
    println("Running in the $env environment")

    routing {
        get("/api/environment") {
            call.respondText(env?: "null")
        }
    }

    val database = initDb(
        environment.config.property("ktor.database.url").getString(),
        environment.config.property("ktor.database.driver").getString(),
        environment.config.property("ktor.database.user").getString(),
        environment.config.property("ktor.database.password").getString(),
    )

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

fun initDb(url: String, driver: String, user: String, password: String): Database {
    val database = Database.connect(url, driver, user , password )

    transaction(database) {
        addLogger(StdOutSqlLogger)
        SchemaUtils.create(Trees, Users)
    }
    return database
}

//fun main() {
//    embeddedServer(
//        Netty,
//        port = 9090,
//        host = "0.0.0.0"
//    ){
//        module()
//    }
//        .start(wait = true)
//}

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)
