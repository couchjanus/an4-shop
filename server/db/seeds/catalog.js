exports.seed = (knex, Promise) => {
  return knex('products').del()
  .then(() => {
    return Promise.join(
      knex('products').insert({
      name: "Lorem",
      price: 60.00,
      available: true,
      best_seller: true,
      categories: 4,
      img: "http://lorempixel.com/200/100/cats/1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('products').insert({
      name: "Maecenas",
      price: 50.00,
      available: true,
      best_seller: true,
      categories: 2,
      img: "http://lorempixel.com/200/100/cats/2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('products').insert({
      name: "Amet",
      price: 20.00,
      available: true,
      best_seller: true,
      categories: 1,
      img: "http://lorempixel.com/200/100/cats/3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('products').insert({
      name: "Aipsum",
      price: 10.00,
      available: true,
      best_seller: true,
      categories: 2,
      img: "http://lorempixel.com/200/100/cats/4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('products').insert({
      name: "Dolor",
      price: 30.00,
      available: true,
      best_seller: true,
      categories: 3,
      img: "http://lorempixel.com/200/100/cats/5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('products').insert({
      name: "Aelit",
      price: 10.00,
      available: true,
      best_seller: true,
      categories: 4,
      img: "http://lorempixel.com/200/100/cats/6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('products').insert({
      name: "Consectetur",
      price: 70.000,
      available: true,
      best_seller: true,
      categories: 1,
      img: "http://lorempixel.com/200/100/cats/7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
      })
    );
  });
};
