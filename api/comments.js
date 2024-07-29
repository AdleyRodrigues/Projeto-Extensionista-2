// api/comments.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/services/db.json'); // Caminho para seu arquivo db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
