const express = require('express');

// Desacopla o módulo Router() do express, pra usar apenas como gerenciador de rotas
const routes = express.Router();

routes.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Maycon Douglas'
  });
});

// Disponibiliza as rotas para serem importadas por outros arquivos
module.exports = routes;
