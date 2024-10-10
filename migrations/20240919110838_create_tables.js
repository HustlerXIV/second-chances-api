/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .hasTable("Users")
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable("Users", function (table) {
          table.increments("id").primary();
          table.string("username").unique().notNullable();
          table.string("password").notNullable();
          table.string("email").unique().notNullable();
          table.string("firstname").notNullable();
          table.string("lastname").notNullable();
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
        });
      }
    })
    .then(() => knex.schema.hasTable("Pets"))
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable("Pets", function (table) {
          table.increments("id").primary();
          table.integer("user_id").references("id").inTable("Users");
          table.string("name").notNullable();
          table.string("species").notNullable();
          table.string("breed");
          table.string("age");
          table.text("description");
          table.string("photo_url");
          table.string("pet_status").defaultTo("available");
          table.timestamp("posted_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
        });
      }
    })
    .then(() => knex.schema.hasTable("Tokens"))
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable("Tokens", function (table) {
          table.increments("id").primary();
          table
            .integer("user_id")
            .references("id")
            .inTable("Users")
            .onDelete("CASCADE");
          table.string("token").notNullable().unique();
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("expires_at").notNullable();
        });
      }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Tokens")
    .dropTableIfExists("Pets")
    .dropTableIfExists("Users");
};
