require('dotenv').config();

const http = require('http');

const express = require('express');

const app = new express();
const server = http.createServer(app);

require('./src/database/sequelize.associations');

server.listen(process.env.PORT || 3000);
