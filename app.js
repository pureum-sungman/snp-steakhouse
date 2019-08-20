require('dotenv').config();

const http = require('http');

const express = require('express');

const app = new express();
const server = http.createServer(app);

// 데이터베이스 초기화
require('./src/database/sequelize.helpers').initDatabase();

server.listen(process.env.PORT || 3000);
