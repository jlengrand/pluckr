#!/bin/zsh
docker run --name postgresql-pluckr -e POSTGRES_USER=pluckr -e POSTGRES_PASSWORD=$PLUCKR_PASSWORD -p 5432:5432 -v pluckr-data:/var/lib/postgresql/data -d postgis/postgis
