
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_username: 'sampleuser', user_password: 'abc123', user_type: 1},
        {user_username: 'sampleuser', user_password: 'abc123', user_type: 1},
        {user_username: 'sampleuser', user_password: 'abc123', user_type: 1}
      ]);
    });
};
