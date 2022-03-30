---
title: Setup
---

Hasura Backend Plus runs in a container along side Postgres and Hasura.

## Nhost (recommended)

The recommended way to start using Hasura Backend Plus is by using Nhost.

With Nhost, you get a complete backend ready in seconds with Hasura, Hasura Backend Plus, Postgres and Minio.

Go to [Nhost](https://nhost.io) and start building your app now.

## Self host

Hasura Backend Plus is open source and can be self hosted.

Here is a `docker-compose.yaml` file for the basic things you need to get started with Hasura Backend Plus.

**Services:**

- Postgres
- Hasura
- Hasura Backend Plus
- Minio

```yaml title="docker-compose.yaml"
version: "3.6"
services:
  postgres:
    image: "nhost/postgres:12-v0.0.6"
    restart: always
    volumes:
      - "./db_data:/var/lib/postgresql/data"
    environment:
      POSTGRES_PASSWORD: pgpassword
      POSTGRES_DB: postgres
  graphql-engine:
    image: "hasura/graphql-engine:v2.0.1"
    depends_on:
      - postgres
    restart: always
    ports:
      - "8080:8080"
    environment:
      HASURA_GRAPHQL_DATABASE_URL: >-
        postgres://postgres:pgpassword@postgres:5432/postgres
      HASURA_GRAPHQL_ENABLE_CONSOLE: "true"
      HASURA_GRAPHQL_ADMIN_SECRET: hello123
      HASURA_GRAPHQL_JWT_SECRET: >-
        {"type":"HS256", "key":
        "jhyu89jiuhyg7678hoijhuytf7ghjiasodibagsdga9dha8os7df97a6sdgh9asudgo7f7g8h1uuoyafsod8pgasipdg8aps9dhaiaisydg8agsd87gasd9oihasd87gas78d"}
      HASURA_GRAPHQL_UNAUTHORIZED_ROLE: public
    command:
      - graphql-engine
      - serve
  hasura-backend-plus:
    image: "nhost/hasura-backend-plus:latest"
    container_name: hbp-dev-hbp
    depends_on:
      - graphql-engine
    restart: always
    ports:
      - "4000:4000"
    environment:
      HOST: 0.0.0.0
      PORT: 4000
      DATABASE_URL: >-
        postgres://postgres:pgpassword@postgres:5432/postgres
      SERVER_URL: "http://localhost:4000"
      HASURA_ENDPOINT: "http://graphql-engine:8080/v1/graphql"
      HASURA_GRAPHQL_ADMIN_SECRET: hello123
      JWT_KEY: >-
        jhyu89jiuhyg7678hoijhuytf7ghjiasodibagsdga9dha8os7df97a6sdgh9asudgo7f7g8h1uuoyafsod8pgasipdg8aps9dhaiaisydg8agsd87gasd9oihasd87gas78d
      JWT_ALGORITHM: HS256
      ALLOWED_REDIRECT_URLS: "http://localhost"
      JWT_CUSTOM_FIELDS: ""
      S3_ENDPOINT: "minio:9000"
      S3_SSL_ENABLED: "false"
      S3_BUCKET: nhost
      S3_ACCESS_KEY_ID: 5a7bdb5f42c41e0622bf61d6e08d5537
      S3_SECRET_ACCESS_KEY: 9e1c40c65a615a5b52f52aeeaf549944ec53acb1dff4a0bf01fb58e969f915c8
      AUTO_ACTIVATE_NEW_USERS: "true"
      PROVIDER_SUCCESS_REDIRECT: "http://localhost:3001/success"
      PROVIDER_FAILURE_REDIRECT: "http://localhost:3001/failed"
      HIBP_ENABLED: "false"
      DEFAULT_ALLOWED_USER_ROLES: "user,me"
      ALLOWED_USER_ROLES: "user,me"
      REGISTRATION_CUSTOM_FIELDS: "display_name"
      COOKIE_SECURE: "false"
      COOKIE_SECRET: "somelongvalue"
      REDIRECT_URL_SUCCESS: "http://localhost:3000"
      REDIRECT_URL_ERROR: "http://localhost:3000/fail"
  minio:
    image: "minio/minio:RELEASE.2020-06-18T02-23-35Z"
    container_name: hbp-dev-minio
    user: "999:1001"
    restart: always
    environment:
      MINIO_ACCESS_KEY: 5a7bdb5f42c41e0622bf61d6e08d5537
      MINIO_SECRET_KEY: 9e1c40c65a615a5b52f52aeeaf549944ec53acb1dff4a0bf01fb58e969f915c8
    entrypoint: sh
    command: -c 'mkdir -p /data/nhost && /usr/bin/minio server /data'
    ports:
      - "9000:9000"
    volumes:
      - "./minio_data:/data"
```

## Start

Start all services using:

```bash
$ docker-compose up -d
```

## Check logs

Check all logs using:

```bash
$ docker-compose logs -f
```

## Startup Completed

All services should now have started and Hasura Backend Plus have added tables in the `auth` schema and a `users` table in the `public` schema.

You can see them in the hasura console running on [http://localhost:8080/console](http://localhost:8080/console).

## Register First User

Add your first user:

```bash
curl -d '{"email":"someone@nhost.io", "password":"StrongPasswordNot1234"}' -H "Content-Type: application/json" -X POST http://localhost:4000/auth/register
```

Hasura Backend Plus creates the user and responds with the JWT token plus some:

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLXVzZXItaWQiOiIxNzlhNjRkMS0wOTg5LTRmODEtOTU3Yi1mZTQ0MzQwYThhMDMiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJtZSJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIn0sInN1YiI6IjE3OWE2NGQxLTA5ODktNGY4MS05NTdiLWZlNDQzNDBhOGEwMyIsImlzcyI6Im5ob3N0IiwiaWF0IjoxNjI2MzY1NDU1LCJleHAiOjE2MjYzNjYzNTV9.KN3Y7IzeWMoMAI6GxIbW0vI6CNL2SSjaH9IN0dD4058",
  "jwt_expires_in": 900000,
  "user": {
    "id": "179a64d1-0989-4f81-957b-fe44340a8a03",
    "display_name": "someone@nhost.io",
    "email": "someone@nhost.io"
  }
}
```

> The registration endpoint returns the JWT token because the user was automatically activated. You can change this by setting `AUTO_ACTIVATE_NEW_USERS` to `false`.

The user is also present in the `users` table in the [Hasura Console](http://localhost:8080/console/data/default/schema/public/tables/users/browse).

## Login User

A user can be logged in by sending the same request to the `/auth/login` endpoint.

```bash
curl -d '{"email":"someone@nhost.io", "password":"StrongPasswordNot1234"}' -H "Content-Type: application/json" -X POST http://localhost:4000/auth/login
```
