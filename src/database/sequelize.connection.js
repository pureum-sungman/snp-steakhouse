const Sequelize = require('sequelize');

/**
 *
 * https://remotemysql.com
 *
 * email: sungman.you@gmail.com
 *
 */

module.exports = new Sequelize(
    'HvuSOSo76T', // database
    'HvuSOSo76T', // username
    'cUHJu4gklC', // password
    {
        host: 'remotemysql.com',
        port: 3306,
        dialect: 'mysql', // mysql || mariadb || postgres || mssql
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);
