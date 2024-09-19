/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema
        .createTable('Users', function(table) {
            table.increments('id').primary();
            table.string('username').unique().notNullable();
            table.string('password').notNullable();
            table.string('email').unique().notNullable();
            table.string('fullname').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })
        .createTable('Pets', function(table) {
            table.increments('id').primary();
            table.integer('user_id').references('id').inTable('Users');
            table.string('name').notNullable();
            table.string('species').notNullable();
            table.string('breed');
            table.integer('age');
            table.text('description');
            table.string('photo_url');
            table.timestamp('posted_at').defaultTo(knex.fn.now());
            table.string('status').defaultTo('available');
        })
        .createTable('Tokens', function(table) {
            table.increments('id').primary();
            table.integer('user_id').references('id').inTable('Users').onDelete('CASCADE');
            table.string('token').notNullable().unique();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('expires_at').notNullable();
            table.string('status').defaultTo('active');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('Pets')
        .dropTableIfExists('Users')
        .dropTableIfExists('Tokens');
};


