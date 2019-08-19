const _ = require('lodash');
const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');
const FoodCategory = require('./sequelize.model.foodCategory');

class Food extends Sequelize.Model {}

Food.init(
    {
        // 분류 (FK)
        category: {
            type: Sequelize.INTEGER,
            references: {
                model: FoodCategory,
                key: 'id'
            },
            defaultValue: -1 // 기본값 -1 (미분류)
        },
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

export default Food;
