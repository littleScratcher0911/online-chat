// server.js
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = 3000;

app.use(express.static(__dirname)); // Serve index.html

io.on("connection", (socket) => {
  console.log("Ein Benutzer ist verbunden.");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // sende an alle verbundenen Nutzer
  });

  socket.on("disconnect", () => {
    console.log("Ein Benutzer hat die Verbindung getrennt.");
  });
});

http.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
