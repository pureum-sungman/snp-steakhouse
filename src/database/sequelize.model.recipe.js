const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');

class Food extends Sequelize.Model { }

Food.init(
    {
        title: {
            type: Sequelize.STRING,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        description: {},
        price: {},

        ingredients: {
            type: Sequelize.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('favColors').split(';')
            },
            set(val) {
                this.setDataValue('favColors', val.join(';'));
            },
        },
        recipes: {
            type: Sequelize.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('favColors').split(';')
            },
            set(val) {
                this.setDataValue('favColors', val.join(';'));
            },
        },
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
    })
    .then(() =>
        Food.create({
            title: 'test food 1'
        })
    )
    .then(jane => {
        console.log(jane.toJSON());
    });
