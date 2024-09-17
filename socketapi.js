const options = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        transport: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
}

const io = require("socket.io")(options);

const mongoose = require('mongoose');
const Account = require('./models/Account');

const socketapi = {
    io: io
}

io.on("connection", function (socket) {

    console.log("[INFO] new connection: [" + socket.id + "]");

    socket.on("message", (data) => {
        console.log(`message from ${data.deviceID ? data.deviceID : 'web'} via socket id: ${socket.id} on topic message`);
        socket.broadcast.emit("message", data);
    });


    // when hardware read qr, it will send phonenumber to server
    // so server can findout which user is using the hardware
    socket.on("phoneNumber", (data) => {
        console.log(`message from ${data.deviceID ? data.deviceID : 'web'} via socket id: ${socket.id} on topic phoneNumber`);
        socket.broadcast.emit("phoneNumber", data);
    })
    // when hardware read qr, it will send phonenumber to server
    // so server can findout which user is using the hardware
    socket.on("pills", async (data) => {
        // String data : "0987654321,1:1,2:1,3:1,4:0,5:0,6:0"
        console.log(`message from ${data.deviceID ? data.deviceID : 'web'} via socket id: ${socket.id} on topic phoneNumber`);
        let pills = data.split(",");
        let phoneNumber = pills.shift();
        let person = await Account.find({ phoneNumber: phoneNumber });
        if (person.length == 0) {
            console.log(`[ERROR] Can't find user with phone number: ${phoneNumber}`);
            socket.broadcast.emit("pills", { error: "Can't find user with phone number" });
            return;
        }
        socket.broadcast.emit("pills", data);
    })

    socket.on("/esp/measure", (data) => {
        console.log(`message from ${data.deviceID ? data.deviceID : 'web'} via socket id: ${socket.id} on topic /es/measure`)
        socket.broadcast.emit("/web/measure", data);
    })

    socket.on("disconnect", function () {
        console.log("User disconnected");
    });
});

module.exports = socketapi;