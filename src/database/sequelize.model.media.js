const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');

class Media extends Sequelize.Model {}

Media.init(
    {
        title: {
            type: Sequelize.STRING
        },
        subtitle: {
            type: Sequelize.STRING
        },
        excerpt: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        mediaType: {
            type: Sequelize.ENUM('image', 'video')
        },
        sourceType: {
            type: Sequelize.ENUM('file', 'url')
        },
        sourcePath: {
            type: Sequelize.STRING
        }
    },
    {
        sequelize,
        modelName: 'media',
        timestamps: true,
        paranoid: true,
        version: true
    }
);

export default Media;
