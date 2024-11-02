const ws = require("ws")
const wsServer = new ws.Server({
    port: 1765
})

wsServer.on("connection", (ws) => {
    console.log("Connection established")
    ws.on("message", (message) => {
        console.log(message)
    })
})

module.exports = wsServer