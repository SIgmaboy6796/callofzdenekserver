const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();

// Configure Socket.IO with CORS
const io = new Server(server, {
    cors: {
        // If you only want to allow PlayCanvas launch domain:
        // origin: "https://launch.playcanvas.com",

        // Or allow all origins (less secure, but quick for testing)
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

socket.on('playerJoined', function (name) {
    console.log (name);
});
