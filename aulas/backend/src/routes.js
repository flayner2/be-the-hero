const express = require('express');
// Importa as funções das rotas de ONGs
const OngController = require('./controllers/OngController');
// Importa as funções das rotas de Casos (incidents)
const IncidentController = require('./controllers/IncidentController');
// Importa as funções das rotas de uma ONG específica
const ProfileController = require('./controllers/ProfileController');
// Importa as funções das rotas de sessões
const SessionController = require('./controllers/SessionController');

// Desacopla o módulo Router() do express, pra usar apenas como gerenciador de rotas
const routes = express.Router();

/* ROTAS DE SESSÕES */
routes.post('/sessions', SessionController.create);

/* ROTAS DE ONGS */
// Rota para a visualização das ONGs criadas -> method = GET
routes.get('/ongs', OngController.index);
// Rota para a criação da ONG -> method = POST
routes.post('/ongs', OngController.create);

/* ROTAS PARA ONGS INDIVIDUAIS (ESPECÍFICAS DE CADA ONG) */
routes.get('/profile', ProfileController.index);

/* ROTAS DE CASOS (INCIDENTS) */
// Rota para a visualização de casos -> method = GET
routes.get('/incidents', IncidentController.index);
// Rota para a criação de um caso para uma ONG -> method = POST
routes.post('/incidents', IncidentController.create);
// Rota para remover um caso -> method = DELETE
routes.delete('/incidents/:id', IncidentController.delete);

// Disponibiliza as rotas para serem importadas por outros arquivos
module.exports = routes;
