
exports.seed = function(knex) {
      return knex('anywhere_fitness').insert([
        {user_username: 'austin', user_password: "abc123", user_type: 1},
        {user_username: 'Kelly', user_password: "abc123", user_type: 1},
        {user_username: 'Jenna', user_password: "abc123", user_type: 1},
        { user_username: 'Humza', user_password: "helloworld", user_type: 1}
      ]);
};
