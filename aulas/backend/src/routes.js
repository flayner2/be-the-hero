const express = require('express');
// Módulo de criptografia, mas um método pode ser usado para gerar string aleatória
const crypto = require('crypto');
// Importa as conexões com o DB
const connection = require('./database/connection');

// Desacopla o módulo Router() do express, pra usar apenas como gerenciador de rotas
const routes = express.Router();

// Rota para a visualização das ONGs criadas -> method = GET
routes.get('/ongs', async (request, response) => {
  // async porque precisamos esperar a query retornar para podermos mostrar os resultados

  // await porque vamos esperar o retorno da query para prosseguir
  const ongs = await connection('ongs').select('*');

  // A query retorna um array, então só precisamos retorná-lo
  return response.json(ongs);
});

// Rota para a criação da ONG -> method = POST
routes.post('/ongs', async (request, response) => {
  // Callback é async porque precisamos esperar os dados serem inseridos na tabela para
  // retornar a resposta

  // Destructuring -> cria variáveis a partir de campos esperados de um objeto
  const { name, email, whatsapp, city, uf } = request.body;

  // Criar 4 bytes de caracteres e converte para uma string hexadecimal
  const id = crypto.randomBytes(4).toString('HEX');

  // Insere os dados em uma tabela disponível na nossa conexão (no caso, 'ongs')
  // await porque precisamos primeiro esperar que essa função termine antes de continuar
  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });

  // Precisa retornar o ID para a ONG poder se conectar na aplicação
  return response.json({ id });
});

// Disponibiliza as rotas para serem importadas por outros arquivos
module.exports = routes;
