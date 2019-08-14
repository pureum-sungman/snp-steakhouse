const http = require('http');

const express = require('express');

const app = new express();
const server = http.createServer(app);

console.log('test');

server.listen(process.env.PORT || 3000);