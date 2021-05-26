
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_username: 'austin', user_password: "abc123"},
        {user_username: 'Kelly', user_password: "abc123" },
        {user_username: 'Jenna', user_password: "abc123" }
      ]);
    });
};
