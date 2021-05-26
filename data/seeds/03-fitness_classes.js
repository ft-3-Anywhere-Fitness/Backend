
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fitness_classes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fitness_classes').insert([
        {fitness_class_name: 'gainz for dayz', fitness_class_type: 'weight lifting', start_time: '10am', 
          duration: '1hr', intensity_level: 'medium', location: 'Planet Fitness', fitness_class_attendees: 15, fitness_class_max: 25 },

        {fitness_class_name: 'gainz for dayz', fitness_class_type: 'weight lifting', start_time: '10am', 
          duration: '1hr', intensity_level: 'medium', location: 'Planet Fitness', fitness_class_attendees: 15, fitness_class_max: 25 },

        {fitness_class_name: 'gainz for dayz', fitness_class_type: 'weight lifting', start_time: '10am', 
          duration: '1hr', intensity_level: 'medium', location: 'Planet Fitness', fitness_class_attendees: 15, fitness_class_max: 25 }
      ]);
    });
};
