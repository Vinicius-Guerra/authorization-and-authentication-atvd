# 1. Visão Geral
Visão geral do projeto, um pouco das tecnologias usadas.
* Prisma ORM
* PostgreSQL
* NodeJS
* Express
* TypeScript
* Zod
* Insomnia
* Tsyringe
* bcrypt + JWT 

# Cadastro e Login API

- praticando trabalho com token JWT e autorizações

### Registro de usuário POST /users

Padrão de corpo

```json
{
	"name": "Name",
	"email": "name@email.com",
	"password": "@12patinhos"
}
```

Padrão de resposta (STATUS 201)

```json
{
	"id": 1,
	"name": "Name",
	"email": "name@email.com"
}
```

### Login de usuário POST /users/login

Padrão de corpo

```json
{
	"email": "name@email.com",
	"password": "@12patinhos"
}
```

Padrão de resposta (STATUS 200)

```json
{
   "accessToken": "TokenJWT",
   "user": {
      "id": 1,
      "name": "Name",
      "email": "name@email.com"
   }
}
```

Possiveis erros

403 UNAUTHORIZED

```json
{
   "message": "Email and password doesn't match"
}
```

404 NOT FOUND

```json
{
   "message": "User not registered"
}
```

### Retornar usuário GET /users


É necessário autorização para acessar esta rota, forneça o token do cabeçalho da requisição.

```json
{
   "headers": {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEzNDUwNzA3fQ.SLI-Qj2WiUACrAZcDmxy55wcuwqAjlGAbiWk1J7jTLQ"
   }
}
```

Padrão de resposta (STATUS 200)

```json
{
	"id": 1,
   	"name": "Name",
	"email": "name@email.com"
}
```