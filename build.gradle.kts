import com.github.gradle.node.npm.task.NpmTask

val ktor_version: String by project
val kotlin_version: String by project
val logback_version: String by project
val exposedVersion: String by project
val postgresqlVersion: String by project
val postgisVersion: String by project

plugins {
    application
    kotlin("jvm") version "1.7.0"
    kotlin("plugin.serialization") version "1.6.21"

    // Clean project
    id("io.gitlab.arturbosch.detekt").version("1.21.0")
    id("org.jetbrains.kotlinx.kover") version "0.4.2"

    id("com.github.node-gradle.node") version "3.4.0"
}

group = "nl.lengrand.pluckr"
version = "0.0.1"
application {
    mainClass.set("nl.lengrand.pluckr.ApplicationKt")

    val isDevelopment: Boolean = project.ext.has("development")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=$isDevelopment")
}

repositories {
    mavenCentral()
    maven { url = uri("https://maven.pkg.jetbrains.space/public/p/ktor/eap") }
}

dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.4.0")
    implementation("io.ktor:ktor-server-core-jvm:$ktor_version")
    implementation("io.ktor:ktor-server-netty-jvm:$ktor_version")
    implementation("ch.qos.logback:logback-classic:$logback_version")
    implementation("io.ktor:ktor-server-call-logging:$ktor_version")
    implementation("io.ktor:ktor-server-metrics-micrometer:$ktor_version")
    implementation("io.ktor:ktor-server-cors:$ktor_version")
    implementation("io.ktor:ktor-server-auth:$ktor_version")
    implementation("io.ktor:ktor-server-sessions-jvm:2.1.0")

    implementation("org.mindrot:jbcrypt:0.4")

    implementation("org.jetbrains.exposed:exposed-core:$exposedVersion")
    implementation("org.jetbrains.exposed:exposed-dao:$exposedVersion")
    implementation("org.jetbrains.exposed:exposed-jdbc:$exposedVersion")
    implementation("org.jetbrains.exposed:exposed-java-time:$exposedVersion")
    implementation("io.ktor:ktor-server-content-negotiation:$ktor_version")
    implementation("io.ktor:ktor-serialization-kotlinx-json:$ktor_version")
    implementation("org.postgresql:postgresql:$postgresqlVersion")
    implementation("net.postgis:postgis-jdbc:$postgisVersion")
    implementation("com.h2database:h2:2.1.214")

    testImplementation("io.ktor:ktor-server-tests-jvm:$ktor_version")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit:$kotlin_version")
    testImplementation("org.jetbrains.kotlin:kotlin-test:$kotlin_version")
    testImplementation("io.ktor:ktor-server-test-host-jvm:2.1.0")
}

val installWebDependencies by tasks.registering(NpmTask::class){
    workingDir.set(File("./src/main/js/pluckr-app"))
    args.set(listOf("install"))
}

val buildWebDependencies by tasks.registering(NpmTask::class){
    dependsOn(installWebDependencies)
    workingDir.set(File("./src/main/js/pluckr-app"))
    args.set(listOf("run", "build"))
}

tasks.build {
    dependsOn(buildWebDependencies)
}