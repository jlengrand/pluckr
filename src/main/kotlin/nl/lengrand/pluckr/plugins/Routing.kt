package nl.lengrand.pluckr.plugins

import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.response.*
import org.jetbrains.exposed.sql.Database

fun Application.configureRouting(database: Database) {

    // Starting point for a Ktor app:
    routing {
        static("/") {
            staticBasePackage = "dist"
            defaultResource("index.html")
            resources(".")
        }

        get("/hello") {
            call.respondText("Hello the World!")
        }
    }
    routing {
    }
}
