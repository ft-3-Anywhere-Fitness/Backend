exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('user_username', 200).notNullable()
      users.string('user_password', 200).notNullable()
      users.string('user_email', 320).notNullable()
      users.timestamps(false, true)
      users.string('user_auth', 200)
      users.integer('user_type').defaultTo(1)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
