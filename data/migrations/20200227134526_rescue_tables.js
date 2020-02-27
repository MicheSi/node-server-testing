
exports.up = function(knex) {
  return knex.schema.createTable('rescues', tbl => {
      tbl.increments();

      tbl
        .string('name', 200)
        .notNullable()
        .unique()
        .index();
      tbl.string('location', 128).notNullable();
      tbl.integer('phone_number', 10).notNullable();
  })
  .createTable('dogs', tbl => {
      tbl.increments();

      tbl.string('name', 128).notNullable();
      tbl.string('breed', 200).notNullable().index();
      tbl.string('age', 128);

  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('dogs')
        .dropTableIfExists('rescues')
};
