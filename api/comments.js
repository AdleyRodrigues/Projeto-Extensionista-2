// api/comments.js
import { create, router as _router, defaults } from 'json-server';
const server = create();
const router = _router('src/services/db.json'); // Caminho para seu arquivo db.json
const middlewares = defaults();

server.use(middlewares);
server.use(router);

export default server;
