package nl.lengrand.pluckr.plugins

import TreeController
import UserController
import UserSession
import io.ktor.http.*
import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.http.content.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.sessions.*
import org.jetbrains.exposed.sql.Database

fun Application.configureRouting(database: Database) {

    val treeController = TreeController(database)
    val userController = UserController(database)

    routing {

        authenticate("auth-form") {
            post("/api/login") {
                val userName = call.principal<UserIdPrincipal>()?.name.toString()
                call.sessions.set(UserSession(name = userName))
                call.respondRedirect("/hello")
            }
        }

        post("/api/signup"){
            val formParameters = call.receiveParameters()
            val user = userController.createUser(formParameters["username"].toString(), formParameters["password"].toString())
            call.response.status(HttpStatusCode.OK)
        }

        get("/api/trees") {
            println("IN HERE FIRST")
            if(call.request.queryParameters["bbox"] != null){
                println("IN HERE")
                val bbox = call.request.queryParameters["bbox"]?.split(",")?.map { it.toDouble() }
                call.respond(treeController.getTrees(bbox))
            }
            else{
                call.respond(treeController.getTrees())
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