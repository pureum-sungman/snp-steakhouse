const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');

class User extends Sequelize.Model {}

User.init(
    {
        username: Sequelize.STRING,
        birthday: Sequelize.DATE
    },
    {
        sequelize,
        modelName: 'user'
    }
);

sequelize
    .sync()
    .then(() =>
        User.create({
            username: 'janedoe',
            birthday: new Date(1980, 6, 20)
        })
    )
    .then(jane => {
        console.log(jane.toJSON());
    });
