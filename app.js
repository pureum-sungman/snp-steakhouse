const http = require('http');

const express = require('express');

const app = new express();
const server = http.createServer(app);

// require('./src/database/sequelize.model.food');

server.listen(process.env.PORT || 3000);
