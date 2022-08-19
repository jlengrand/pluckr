# Pluckr

Pluckr is a (currently non-functional) project aiming at helping folks find available trees, plants and spices to pluck from.

## About the project

This project is build with [Ktor](https://ktor.io/) for the backend, backed by a PostgreSQL database and using [Exposed](https://github.com/JetBrains/Exposed) to interact with the database.
The frontend is buildt with [Open-WC](https://open-wc.org/), [Lit](http://lit.dev/) and [Leaflet](https://leafletjs.com/examples/quick-start/) in Javascript.

## Running the project locally

The project is in 3 separate pieces. You need to : 

* Fire up a PostgreSQL database, I use a local Docker image for the moment

* Fire the backend. You do this using `./gradlew run`. 
* Fire the frontend. It is located in `src/js/pluckr-app`. Run `npm install` and then `npm start`


## TODOs

* Adds tests and install [Kover](https://lengrand.fr/kover-code-coverage-plugin-for-kotlin/)
* Look into Qonada and Detekt
* Automated deployment
* Setup local and remote db
* Build the freaking project

## License

This is a personal project, you may do anything with it without my permission 😊.
All rights reserved.

## Author

[Julien Lengrand-Lambert](https://twitter.com/jlengrand)
