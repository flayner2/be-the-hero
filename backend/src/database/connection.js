const knex = require('knex');
// Importa o arquivo de configurações do knex
const configuration = require('../../knexfile');

// Cria uma variável para checar se estamos no ambiente de testes
const config =
  process.env.NODE_ENV === 'test'
    ? configuration.test
    : configuration.development;

// Cria uma conexão de desenvolvimento
const connection = knex(config);

// Exporta a conexão com o DB
module.exports = connection;
