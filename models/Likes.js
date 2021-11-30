const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Likes extends Model { }

Likes.init({
    lid: {
        type: DataTypes.BIGINT,
       autoIncrement: true,
       initialAutoIncrement: 100,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [9]
        }
    },
    uid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            len: [6]
        },
        // references: {
        //     model: 'users',
        //     key: 'userId'
        // }
    },
    pid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            len: [6]
        },
        // references: {
        //     model: 'pets',
        //     key: 'petId'
        // }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'likes'
});

module.exports = Likes;