package nl.lengrand.pluckr.plugins

import io.ktor.server.routing.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.response.*
import io.ktor.server.request.*

fun Application.configureRouting() {

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
