
exports.up = function(knex, Promise) {


return knex.schema.createTable('delivery', (table) => {
    table.increments();
    table.string('name').unique().notNullable();
    table.decimal('price').notNullable().defaultTo(0.00);
    table.string('description').notNullable();
  });
  
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('delivery');  
};
