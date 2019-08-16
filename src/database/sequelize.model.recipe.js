const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');

class Recipe extends Sequelize.Model {}

Recipe.init(
    {
        // attributes
        srcUrl: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        // options
        sequelize,
        modelName: 'food',
        timestamps: true
    }
);