
const Sequelize = require('sequelize');

/**
 *
 * https://remotemysql.com
 *
 * email: sungman.you@gmail.com
 *
 */

module.exports = new Sequelize(
    process.env.DB_SEQUELIZE_DATABASE,
    process.env.DB_SEQUELIZE_USERNAME,
    process.env.DB_SEQUELIZE_PASSWORD,
    {
        host: process.env.DB_SEQUELIZE_HOST,
        port: process.env.DB_SEQUELIZE_PORT,
        dialect: 'mysql', // mysql || mariadb || postgres || mssql
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);
