import express from "express";
import http from "http";
import socket from "socket.io";

const app = express();
app.use(express.static(`${__dirname}./frontExample`));

const PORT = process.env.PORT || 8899;

// app.get("/message", (req, res) => {
//   const message = req.query.message?.toString() || "";

//   for (const client of clients) {
//     client.emit("msg", message);
//   }

//   res.json({
//     ok: true,
//     message,
//   });
// });

// const httpServer = http.createServer(app);
// const io = socket(httpServer, {
//   path: "/socket.io",
// });

// const clients: Array<any> = [];

// io.on("connection", (client: socket.Socket) => {
//   client.on("join", (params: string) => {
//     clients.push(client);
//     console.log(`Joined: ${client.id} ${params}`);
//   });

//   client.on("disconnect", () => {
//     clients.splice(clients.indexOf(client), 1);
//     console.log(`Disconnected: ${client.id}`);
//   });
// });

// httpServer.listen(PORT, () => {
//   console.log(`Server http started at ${PORT}`);
// });
