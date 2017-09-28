
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table) => {
    table.increments();
    table.string('name').unique().notNullable();
    table.decimal('price').notNullable().defaultTo(0.00);
    table.boolean('available').notNullable().defaultTo(true);
    table.boolean('best_seller').notNullable().defaultTo(false);
    table.string('img');
    table.string('description').notNullable();
    table.integer('categories').notNullable().defaultTo(1)
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');  
};
