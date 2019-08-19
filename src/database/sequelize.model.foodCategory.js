const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');

class FoodCategory extends Sequelize.Model {}

FoodCategory.init(
    {
        // 제목
        title: {
            type: Sequelize.STRING
        },
        // 제목 (부)
        subtitle: {
            type: Sequelize.STRING
        },
        // 설명 (요약)
        excerpt: {
            type: Sequelize.STRING
        },
        // 설명
        description: {
            type: Sequelize.STRING
        }
    },
    {
        sequelize,
        modelName: 'foodCategory',
        timestamps: true,
        paranoid: true,
        version: true
    }
);

export default FoodCategory;
