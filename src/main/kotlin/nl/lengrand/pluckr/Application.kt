package nl.lengrand.pluckr

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.metrics.micrometer.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.callloging.*
import nl.lengrand.pluckr.plugins.*

fun Application.myapp(){
    install(CallLogging)
    install(MicrometerMetrics)

    configureRouting()
}

fun main() {
    embeddedServer(
        Netty,
        module =  Application::myapp,
        port = 8080,
        host = "0.0.0.0")
        .start(wait = true)
}
