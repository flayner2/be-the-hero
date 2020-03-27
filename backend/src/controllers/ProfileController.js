/* 
  Esse Controller é responsável pelo perfil de uma ONG específica
  É nele que ficam métodos, por exemplo, de listagem de casos de apenas uma ONG
*/
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  }
};
