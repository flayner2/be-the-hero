const express = require('express');

const app = express();

// Informa o servidor para esperar JSON como o formato do `body` das requests
app.use(express.json());

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

app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Maycon'
  });
});

app.listen(3333);
