const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
  ];
  
 
  const emails = [
    'lorem@gmail.com',
    'imsum@gmail.com',
    'dolor@gmail.com',
    'sit@gmail.com',
    'amet@gmail.com',
    'consectetur@gmail.com',
    'adipiscing@gmail.com',
    'elit@gmail.com',
    'curabitur@gmail.com',
    'vel@gmail.com',
    'hendrerit@gmail.com',
  ];

  const thoughts = [
    'Decision Trackers are awesome',
    'Find My Phone is a useful app',
    'Learn Piano is not very good for learning Piano',
    'Starbase Defender is a great game, I love it',
    'Tower Defense is okay',
    'Monopoly Money is better than real money IMO',
    'Movie trailers are just the best parts of a movie distilled into 90 seconds',
    'Hello world, this is a comment',
    'Social media is a big waste of time',
    'Notes is my most used app',
    'Messages is open on my computer 24/7',
    'Email is open on my computer',
    'Compass is never opened',
    'Firefox is great for privacy',
  ];

  const friends = [
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ]
  
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)}`;
  
  const getRandomEmail = () =>
  `${getRandomArrItem(emails)}`;

  const getRandomThought = () =>
  `${getRandomArrItem(thoughts)}`;

  const getRandomFriend = () =>
  `${getRandomArrItem(friends)}`;
  
  // Export the functions for use in seed.js
  module.exports = {
    getRandomName,
    getRandomEmail,
    getRandomFriend,
    getRandomThought,
    genRandomIndex,
  };
  