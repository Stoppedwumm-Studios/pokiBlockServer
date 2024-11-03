try {
    const ws = require("ws")
    const wsServer = new ws.Server({
        port: 1765
    })


    wsServer.on("connection", (wsT) => {
        console.log("Connection established")
        wsT.on("message", (message) => {
            console.log("Server message:", message.toString())
        })
    })

    module.exports = wsServer
} catch (error) {
    console.log(error)
}