const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create user table to house user information
class Users extends Model {}

Users.init(
    {
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                len: [6]
            }
        },
        
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [45]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        },
        registeredAt: {
            type: DataTypes.DATE(),
            allowNull: true,
            
        },
        lastLogin: {
            type: DataTypes.DATE(),
            allowNull: true,   
        },
        profile: {
            type: DataTypes.TEXT,
            allowNull: true,   
        }
    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        initialAutoIncrement: 10230,
        modelName: 'users'
    }
);

module.exports = Users;