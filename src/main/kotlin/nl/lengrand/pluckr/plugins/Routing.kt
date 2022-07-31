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
import org.jetbrains.exposed.exceptions.ExposedSQLException
import org.jetbrains.exposed.sql.Database
import java.sql.SQLIntegrityConstraintViolationException

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
            try{
                userController.createUser(formParameters["username"].toString(), formParameters["password"].toString())
                call.response.status(HttpStatusCode.OK)
            }
            catch(e: ExposedSQLException){
                val message = when (e.sqlState) {
                    "23505" ->
                        "User already exists"
                    else ->
                        "Unknown error, please retry later"
                }
                call.response.status(HttpStatusCode(500, message))

            }

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