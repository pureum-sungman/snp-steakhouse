const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');

class Food extends Sequelize.Model {}

Food.init(
    {
        // attributes
        title: {
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

sequelize
    .sync({
        force: true // Drop the table if it already exists
    })
    .then(() =>
        Food.create({
            title: 'test food 1'
        })
    )
    .then(jane => {
        console.log(jane.toJSON());
    });
