const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create pets table to house pet information
class Pets extends Model { }

// create fields/columns for pets model (table)
Pets.init(
    {
        petId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                len: [6]
            }
        },
        petname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        age: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        sex: {
            type: DataTypes.CHAR,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [10]
            // }
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [45]
            // }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        } ,
        imgurl: {
            type: DataTypes.TEXT,
            allowNull: true,
        } 
    },
    
    
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        initialAutoIncrement: 500130,
        modelName: 'pets'
    }
);

module.exports = Pets;