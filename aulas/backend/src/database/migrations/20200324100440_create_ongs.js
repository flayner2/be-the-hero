// Método resposável pela criação da tabela
exports.up = function(knex) {
  // Cria um Schema de tabela, com (nome, callback(table))
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

// Permite, por exemplo, deletar tabelas
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
