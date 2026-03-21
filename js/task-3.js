'use strict';

// Write an arrow function  sortByDescendingFriendCount(users) that will take one parameter users— an array of user objects.
// The function should return an array of all users, sorted in descending order by the number of their friends (property friends).
// Take the code below and insert it after the declaration of your function to verify that it works correctly.
// The results of its operation will be displayed in the console.

const sortByDescendingFriendCount = (users) => {
  return users.toSorted((asc, desc) => desc.friends.length - asc.friends.length);
};

console.log(
  sortByDescendingFriendCount([
    {
      name: 'Moore Hensley',
      friends: ['Sharron Pace'],
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Sharron Pace'],
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      gender: 'male',
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      friends: ['Goldie Gentry', 'Briana Decker'],
      gender: 'female',
    },
  ])
);
// [
//    {
//      name:  "Ross Vazquez" ,
//      friends: [ "Marilyn Mcintosh" , "Padilla Garrison" , "Naomi Buckner" ],
//      gender:  "male"
//    },
//    {
//      name:  "Sharlene Bush" ,
//      friends: [ "Briana Decker" , "Sharron Pace" ],
//      gender:  "female"
//    },
//    {
//      name:  "Elma Head" ,
//      friends: [ "Goldie Gentry" , "Aisha Tran" ],
//      gender:  "female"
//    },
//    {
//      name:  "Carey Barr" ,
//      friends: [ "Jordan Sampson" , "Eddie Strong" ],
//      gender:  "male"
//    },
//    {
//      name:  "Blackburn Dotson" ,
//      friends: [ "Jacklyn Lucas" , "Linda Chapman" ],
//      gender:  "male"
//    },
//    {
//      name:  "Sheree Anthony" ,
//      friends: [ "Goldie Gentry" , "Briana Decker" ],
//      gender:  "female"
//    },
//    {
//      name:  "Moore Hensley" ,
//      friends: [ "Sharron Pace" ],
//      gender:  "male"
//    }
// ]
