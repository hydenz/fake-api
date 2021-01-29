
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('jsons').del()
    .then(function () {
      // Inserts seed entries
      return knex('jsons').insert([
        {
          id: 1,
          json: '{"name":"JohnDoe","email":"johndoe@mail.com","age":23,"address":"123 MainStreet, NewYork, NY"}',
          created_at: "3000-01-29 11:18:44"
        },
      ]);
    });
};
