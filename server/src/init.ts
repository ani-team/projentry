import * as express from "express";
import logger from "./lib/logger";
import * as http from "http";
import { Server as SocketIO } from "socket.io";

const app = express();
const server = http.createServer(app);
const socketIO = new SocketIO({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: false,
  },
}).listen(server);
const hostname = "localhost";
const port = 8082;

function startServer() {
  server.listen(port, hostname, () => {
    logger.info(`Open Projentry UI at http://${hostname}:${port}`);
  });
}

export { app, socketIO, startServer };
