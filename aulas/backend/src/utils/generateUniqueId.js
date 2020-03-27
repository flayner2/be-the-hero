// Módulo de criptografia, mas um método pode ser usado para gerar string aleatória
const crypto = require('crypto');

module.exports = function generateUniqueId() {
  // Cria 4 bytes de caracteres e converte para uma string hexadecimal
  return crypto.randomBytes(4).toString('HEX');
};
