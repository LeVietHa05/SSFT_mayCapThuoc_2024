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
        let newPills = [];
        newPills = pills.split(",");
        let person = await Account.find({ phoneNumber: phoneNumber });
        if (person.length == 0) {
            console.log(`[ERROR] Can't find user with phone number: ${phoneNumber}`);
            socket.broadcast.emit("pills", { error: "Can't find user with phone number" });
            return;
        }
        person = person[0];
        person.boughtHistory.push({
            time: new Date(),
            type1: newPills[0].split(":")[1],
            type2: newPills[1].split(":")[1],
            type3: newPills[2].split(":")[1],
            type4: newPills[3].split(":")[1],
            type5: newPills[4].split(":")[1],
            type6: newPills[5].split(":")[1]
        })
        await person.save();
        socket.broadcast.emit("pills", data);
    })

    //incase web send pills data to hardware
    socket.on("/web/pills", async (data) => {
        console.log(`message from web via socket id: ${socket.id} on topic /web/pills`);
        //data: {phoneNumber: "0987654321", pills: [1, 1, 1, 0, 0, 0]}
        console.log(data);
        let phoneNumber = data.phoneNumber;
        let newPills = data.pills;
        let dataToSend = "";
        dataToSend += phoneNumber + ",";
        for (let i = 0; i < newPills.length; i++) {
            dataToSend += `${i + 1}:${newPills[i]},`;
        }
        console.log(dataToSend);
        socket.broadcast.emit("/esp/pills", dataToSend);
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