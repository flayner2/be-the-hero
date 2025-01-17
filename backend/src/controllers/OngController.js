// Importa as conexões com o DB
const connection = require('../database/connection');
// Importa a função de gerar IDs únicos do nosso módulo utils
const generateUniqueId = require('../utils/generateUniqueId');

// Controllers guardam as funções comuns de cada rota
module.exports = {
  async index(request, response) {
    // async porque precisamos esperar a query retornar para podermos mostrar os resultados

    // await porque vamos esperar o retorno da query para prosseguir
    const ongs = await connection('ongs').select('*');

    // A query retorna um array, então só precisamos retorná-lo
    return response.json(ongs);
  },
  async create(request, response) {
    // Callback é async porque precisamos esperar os dados serem inseridos na tabela para
    // retornar a resposta

    // Destructuring -> cria variáveis a partir de campos esperados de um objeto
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueId();

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
  }
};
