

var socket = io();

socket.on("connect", function () {
    console.log("Connected to server");
});

socket.on("pills", function (data) {
    if (data.error) {
        console.log(data.error);
        return;
    } else {
        //render the pills data
        console.log(data);
        
    }
});

socket.on("disconnect", function () {
    console.log("Disconnected from server");
});

function sendMessage(topic, message) {
    socket.emit(topic, message);
}