const express = require('express');
const cors = require('cors');
// Importa os errors do celebrate para garantir que a aplicação saiba lidar com erros
const { errors } = require('celebrate');
// Importa o arquivo de rotas
// NOTE: precisa ser caminho relativo, se não o JS acha que é modulo de library
const routes = require('./routes');
// Inicia o express
const app = express();

// Informa o servidor para usar o módulo de segurança CORS
app.use(cors());

// Informa o servidor para esperar JSON como o formato do `body` das requests
app.use(express.json());

// Informa nosso servidor para usar as rotas importadas do arquivo de rotas
app.use(routes);

// Informa nosso servidor para usar o error handling do celebrate
app.use(errors());

/*
  Rota ('http://google.com/images') / Recurso ('/images')
*/

/* 
  Métodos HTTP:

  GET: Buscar/listar uma informação do backend
  POST: Criar uma informação no backend
  PUT: Alterar uma informação no backend
  DELETE: Deletar uma informação do backend
*/

/* 
  Tipos de parâmetros:

  Query Params: Parâmetros nomeados enviados na rota após '?' (filtros, paginação)
  Route Params: Parâmetros utilizados para identificar recursos ('users/:id')
  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (e.g., nome, e-mail para criar um user)
*/

/* 
  Bancos de dados:

  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  NoSQL: MongoDB, CouchDB, etc

  Driver: SELECT * FROM users
  Query Builder: table('users').select('*').where(...) -> usa JS, é mais flexível

  Migrations: forma de criar tabelas e manter histórico das criações/alterações
*/

module.exports = app;
