const slugify = require("slugify");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        {
          category_name: "Tees",
          category_slug: slugify("tees",{lower:true})
        },
        {
          category_name: "Hoodies",
          category_slug: slugify("hoodies",{lower:true}),
        }
      ]);
    });
};
