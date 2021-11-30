const Users = require('./Users');
const Pets = require('./Pets');
const Likes = require('./Likes');

//likes - many to many relationship between users and pets
Users.belongsToMany(Pets, {
    through: Likes,
    as: 'uid',
    foreignKey: 'userId',
   // onDelete: 'SET NULL'
});

Pets.belongsToMany(Users, {
    through: Likes,
    as: 'pid',
    foreignKey: 'petId'
});

Users.hasMany(Likes, {
    foreignKey: 'userId'
  });
  
  Likes.belongsTo(Users, {
    foreignKey: 'userId',
 
  });

module.exports = { Users, Pets, Likes };