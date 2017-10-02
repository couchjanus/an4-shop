
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('delivery').del()
  .then(() => {
    return Promise.join(
      knex('delivery').insert({
      name: "Drone",
      price: 19.99,
      description: "Get your package within an hour and have it flown in by a drone!"
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('delivery').insert({
      name: "Express",
      price: 9.99,
      description: "The quickest of the normal delivery service"
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('delivery').insert({
      name: "Standard",
      price: 5.99,
      description: "Standard shipping can take up to 4 days"
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('delivery').insert({
      name: "Pick-up",
      price: 0,
      description: "Pick it up tomorrow from you local post office"
      })
    );
  })
};
