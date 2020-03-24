const knex = require('knex');
// Importa o arquivo de configurações do knex
const configuration = require('../../knexfile');

// Cria uma conexão de desenvolvimento
const connection = knex(configuration.development);

// Exporta a conexão com o DB
module.exports = connection;
