import http from "http";
import { Server as SocketServer } from "socket.io";

import app from "../app";

const httpServer = http.createServer(app);
const io = new SocketServer(httpServer);

io.on("connection", (socket) => {
  console.log("a user connected!", { socket });
});

export { httpServer };
