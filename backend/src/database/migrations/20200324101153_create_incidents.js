exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments(); // Cria uma chave primária automática incrementável
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    // ID da ONG criadora do incidente
    table.string('ong_id').notNullable();
    // Faz a relação entre a ONG criadora (foreign) e o caso
    table
      .foreign('ong_id')
      .references('id')
      .inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
