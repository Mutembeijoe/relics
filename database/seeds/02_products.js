const slugify = require('slugify');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          product_name: "Girl Power Hoodie Black",
          product_slug: slugify("Girl Power Hoodie Black",{lower:true}),
          price: 1150,
          description: "Girl Power Hoodie with Rosie the Riveter Poster, Color Black",
          img_url: "https://res.cloudinary.com/myloxyloto/image/upload/v1589988178/smartshop/Highcompressed_1416322864_h6xxmh.png",
          category_id: 2,
        },
        {
          product_name: "Nerds Only",
          product_slug: slugify("Nerds Only", {lower:true}),
          price: 1200,
          description: "Nerds Smiley Face Hoodie",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988161/smartshop/Highcompressed_868069820_hpqpba.png",
          category_id: 2,
        },
        {
          product_name: "Deathly Hallows",
          product_slug: slugify("Deathly Hallows", {lower:true}),
          price: 1300,
          description: "Harry Potter and the Deathly Hallows",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988148/smartshop/Highcompressed_573254190_bmhapn.png",
          category_id: 2,
        },
        {
          product_name: "BasketBall Flame",
          product_slug: slugify("BasketBall Flame", {lower:true}),
          price: 1150,
          description: "Basket Ball in Flames Hoodie",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988154/smartshop/Highcompressed_672764707_zn4ipc.png",
          category_id: 2,
        },
        {
          product_name: "Freddy Krueger",
          product_slug: slugify("Freddy Krueger", {lower:true}),
          price: 1200,
          description: "Nightmare on Elm Street Freddy Krueger",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988164/smartshop/Highcompressed_907755284_igxw9l.png",
          category_id: 2,
        },
        {
          product_name: "Number Five",
          product_slug: slugify("Number Five", {lower:true}),
          price: 999,
          description: "Number Five Hoodie",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988187/smartshop/Highcompressed_1852123449_qsjj6q.png",
          category_id: 2,
        },
        {
          product_name: "Rainbow State",
          product_slug: slugify("Rainbow State", {lower:true}),
          price: 1150,
          description: "USA flag hoodie with rainbow colors",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988192/smartshop/Highcompressed_1924104324_kykjdk.png",
          category_id: 2,
        },
        {
          product_name: "Phantom Astronaut",
          product_slug: slugify("Phantom Astronaut", {lower:true}),
          price: 1300,
          description: "A phantom Astronaut",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988184/smartshop/Highcompressed_1637944223_khmo6h.png",
          category_id: 2,
        },
        {
          product_name: "Star Wars Valentines T-shirt",
          product_slug: slugify("Star Wars Valentines T-shirt", {lower:true}),
          price: 650,
          description: "Darth Vader Star Wars Valentine Red T-shirt",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988198/smartshop/Highcompressed_2114311319_nm4amj.png",
          category_id: 1,
        },
        {
          product_name: "Rasta Roots n Culture",
          product_slug: slugify("Rasta Roots n Culture", {lower:true}),
          price: 700,
          description: "Rasta roots Black Tshirt ",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988190/smartshop/Highcompressed_1888964957_oin51y.png",
          category_id: 1,
        },
        {
          product_name: "Green Lantern ",
          product_slug: slugify("Green Lantern", {lower:true}),
          price: 660,
          description: "Green T-shirt with Green Lantern Logo for the fans",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988176/smartshop/Highcompressed_1293443006_je4l87.png",
          category_id: 1,
        },
        {
          product_name: "Lets PI",
          product_slug: slugify("Lets PI", {lower:true}),
          price: 940,
          description: "Cool T-shirt with math PI constant logo",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988173/smartshop/Highcompressed_1183684061_zo9omu.png",
          category_id: 1,
        },
        {
          product_name: "The X-men",
          product_slug: slugify("The X-men", {lower:true}),
          price: 590,
          description: "The X-men fans T-shirt",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988148/smartshop/Highcompressed_483101595_agibgd.png",
          category_id: 1,
        },
        {
          product_name: "Platform 9 3/4",
          product_slug: slugify("Platform 9 3/4", {lower:true}),
          price: 960,
          description: "Welcome to world of magic and wizardly T-shirt",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988148/smartshop/Highcompressed_567528013_gccvwd.png",
          category_id: 1,
        },
        {
          product_name: "Where's the Rum",
          product_slug: slugify("Where's the Rum", {lower:true}),
          price: 830,
          description: "T-shirts of the Caribbean Rum T-shirt",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988142/smartshop/Highcompressed_239480161_kzncxq.png",
          category_id: 1,
        },
        {
          product_name: "The Hulk",
          product_slug: slugify("The Hulk", {lower:true}),
          price: 1000,
          description: "The Incredible Hulk",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988135/smartshop/Highcompressed_104072772_olofzl.png",
          category_id: 1,
        },
        {
          product_name: "I'll be back",
          product_slug: slugify("I'll be back", {lower:true}),
          price: 710,
          description: "The Terminator, Mr. I'll be back white T-shirt",
          img_url:
            "https://res.cloudinary.com/myloxyloto/image/upload/v1589988154/smartshop/Highcompressed_717691624_nl4zrh.png",
          category_id: 1,
        },
      ]);
    });
};
