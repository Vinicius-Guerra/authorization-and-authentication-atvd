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

# API Autenticação e Autorização

- Uma API desenvolvida para praticar conceitos de autenticação e autorização.

Rode o comando abaixo para executar a migração do banco de dados:

```bash
npm run migrate:dev
```

**Será essencial ter um banco de dados criado e referenciado nas variáveis de ambiente**

Rode o comando abaixo para iniciar a aplicação em modo de desenvolvimento

```bash
npm run dev
```

## Rotas da aplicação

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

#### Possiveis erros

403 UNAUTHORIZED - E-mail e senha não correspondem

```json
{
   "message": "Email and password doesn't match"
}
```

404 NOT FOUND - Usuário não cadastrado

```json
{
   "message": "User not registered"
}
```

### Retornar usuário GET /users 

#### É necessário autorização para acessar esta rota, forneça o token do cabeçalho da requisição.

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

#### Possiveis erros

403 UNAUTHORIZED 