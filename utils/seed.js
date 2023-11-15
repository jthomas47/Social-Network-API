const connection = require('../config/connection');
const User = require('../models/User');
const { getRandomName, getRandomEmail, getRandomFriend, getRandomThought } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  // Empty arrays for randomly generated users
  const users = [];

  for (let i = 0; i < 10; i++) {
   
    const newUser = {
        name : getRandomName(),
        email : getRandomEmail(),
        thoughts : getRandomThought(),
        friends : getRandomFriend(),
    };
    users.push(newUser);
  }

  // Wait for the users to be inserted into the database
  await User.collection.insertMany(users);

  console.table(users);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
