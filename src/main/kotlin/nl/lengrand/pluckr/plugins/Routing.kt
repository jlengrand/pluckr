package nl.lengrand.pluckr.plugins

import Controller
import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.response.*
import org.jetbrains.exposed.sql.Database

fun Application.configureRouting(database: Database) {

    val controller = Controller(database)
    routing {

        get("/api/trees") {
            println("IN HERE FIRST")
            if(call.request.queryParameters["bbox"] != null){
                println("IN HERE")
                val bbox = call.request.queryParameters["bbox"]?.split(",")?.map { it.toDouble() }
                call.respond(controller.getTrees(bbox))
            }
            else{
                call.respond(controller.getTrees())
            }
        }



        get("/hello") {
            call.respondText("Hello the World!")
        }

        static("/") {
            staticBasePackage = "dist"
            defaultResource("index.html")
            resources(".")
        }
    }
}