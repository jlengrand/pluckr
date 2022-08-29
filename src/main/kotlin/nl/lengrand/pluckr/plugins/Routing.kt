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

fun Application.configureRouting(database: Database) {

    val treeController = TreeController(database)
    val userController = UserController(database)

    routing {

        get ("/api/session"){
            val userSession = call.sessions.get<UserSession>()
            call.respond(userSession?:"{}")
        }

        authenticate("user_session") {
            get("/api/authenticated") {
                call.respondText("Hello, ${call.principal<UserSession>()?.name}!")
            }
        }

        post("/api/login") {
            val formParameters = call.receiveParameters()

            try {
                val user = userController.getUser(
                    formParameters["username"].toString(),
                    formParameters["password"].toString()
                )
                call.sessions.set(UserSession(user.username))
                call.respondRedirect("/")
            } catch (e: ExposedSQLException) {
                call.response.status(HttpStatusCode(500, e.message!!))
            }
        }

        post("/api/logout") {
            call.sessions.clear<UserSession>()
            call.respondRedirect("/")
        }

        post("/api/signup") {
            val formParameters = call.receiveParameters()
            try {
                userController.createUser(formParameters["username"].toString(), formParameters["password"].toString())
                call.response.status(HttpStatusCode.OK)
            } catch (e: ExposedSQLException) { // TODO: Should I leak exceptions here?
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
            if (call.request.queryParameters["bbox"] != null) {
                val bbox = call.request.queryParameters["bbox"]?.split(",")?.map { it.toDouble() }
                call.respond(treeController.getTrees(bbox))
            } else {
                call.respond(treeController.getTrees())
            }
        }

        get("/api/hello") {
            call.respondText("Hello the World!")
        }

        static("/") {
            staticBasePackage = "dist"
            defaultResource("index.html")
            resources(".")
        }
    }
}