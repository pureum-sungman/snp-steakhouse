const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');

class Food extends Sequelize.Model { }

Food.init(
    {
        category: {
            type: Sequelize.ENUM(
                'steak',
                'pasta',
                'salad',
                'soup',
                'dessert',
            ),
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        title: {
            type: Sequelize.STRING,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        subtitle: {},
        description: {},
        price: {},
    },
    {
        sequelize,
        modelName: 'food',
        timestamps: true,
        paranoid: true,
        version: true
    }
);

sequelize
    .sync({
        force: true // Drop the table if it already exists
    });