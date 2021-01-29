
exports.up = function (knex) {
    return knex.schema.createTable('jsons', function (table) {
        table.increments();
        table.text('json').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('jsons');
};
