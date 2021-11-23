const User = require('./User');
const Pet = require('./Pet');
const Like = require('./Like');

//likes - many to many relationship between users and pets
User.belongsToMany(Pet, {
    through: Like,
    as: 'liked_pets',
    foreignKey: 'user_id'
});

Pet.belongsToMany(User, {
    through: Like,
    as: 'liked_pets',
    foreignKey: 'pet_id'
});


module.exports = { User, Pet, Like };