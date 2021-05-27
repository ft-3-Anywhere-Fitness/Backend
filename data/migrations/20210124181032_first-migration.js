exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
      users.string('auth', 200)
      users.integer('user_type').defaultTo(1)
    })

    .createTable('fitness_classes', (classes) => {
      classes.increments('fitness_class_id')
      classes.string('fitness_class_name', 320).notNullable()
      classes.string('fitness_class_img').defaultTo('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fitness-hangover-1565770628.jpg')
      classes.string('fitness_class_type', 320).notNullable()
      classes.string('start_time', 320).notNullable()
      classes.string('duration', 320).notNullable()
      classes.string('intensity_level', 320).notNullable()
      classes.string('location', 320).notNullable()
      classes.integer('fitness_class_attendees', 200).notNullable()
      classes.integer('fitness_class_max').notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('fitness_classes')
}
