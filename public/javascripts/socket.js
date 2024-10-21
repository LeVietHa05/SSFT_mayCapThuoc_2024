

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
        //0000000000,1:1,2:0,3:0,4:0,5:0,6:0
        data = data.split(",");
        data.shift();
        console.log(data);
        let ids = ['P123af', 'S789aj', 'H764ae', 'S789aj', 'P124af', 'H765ae']
        cart = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i][2] > 0) {
                pillList.forEach(pill => {
                    if (pill.pill_id == ids[i]) {
                        pillQuantityControl(pill, +data[i][2], 'step6_cart_pillList_quantity', true);
                    }
                })
            }
        }

        changeStep('step7_payment')
        setTimeout(() => {
            window.location.reload();
        }, 15000);
        // renderCart();
    }
});

socket.on("disconnect", function () {
    console.log("Disconnected from server");
});

function sendMessage(topic, message) {
    socket.emit(topic, message);
}