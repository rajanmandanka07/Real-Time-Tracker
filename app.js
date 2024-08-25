const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files from the /public directory
app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", (socket) => {
    socket.on("send-location", (data) => {
        io.emit("receive-location", {id: socket.id, ...data});
    });
    socket.on("disconnect", () => {
        io.emit("user-disconnected", socket.id);
    })
});

app.get("/", (req, res) => {
    console.log("serving index.ejs");
    res.render("index");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
