const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');

class Recipe extends Sequelize.Model { }

Recipe.init(
    {

        title: {
            type: Sequelize.STRING,
        },
        description: {},

        order: {},

        // 재료
        ingredients: {
            type: Sequelize.STRING,
            validate: {
                isArray(value) {
                    if (_.isArray(value)) throw new Error('Must be an array');
                }
            },
            get() {
                return this.getDataValue('ingredients').split(';');
            },
            set(value) {
                this.setDataValue('ingredients', value.join(';'));
            }
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
        modelName: 'recipe',
        timestamps: true,
        paranoid: true,
        version: true
    }
);

export default Recipe;