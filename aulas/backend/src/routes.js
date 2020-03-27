const express = require('express');
// Importa celebrate para validações integradas ao express
const { celebrate, Segments, Joi } = require('celebrate');
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
// Validação é feita com celebrate como middleware
routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

/* ROTAS PARA ONGS INDIVIDUAIS (ESPECÍFICAS DE CADA ONG) */
routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

/* ROTAS DE CASOS (INCIDENTS) */
// Rota para a visualização de casos -> method = GET
routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
);
// Rota para a criação de um caso para uma ONG -> method = POST
routes.post('/incidents', IncidentController.create);
// Rota para remover um caso -> method = DELETE
routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);

// Disponibiliza as rotas para serem importadas por outros arquivos
module.exports = routes;
