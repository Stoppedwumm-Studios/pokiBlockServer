try {
    const { BrowserWindow, app } = require('electron');
    const path = require('path');
    const { electron } = require('process');
    const ws = require("ws")

    app.on('ready', () => {
        try {
            require("./server")
            let mainWindow = new BrowserWindow({
                webPreferences: {
                    nodeIntegration: true
                }
            });
            mainWindow.loadFile('index.html');
            mainWindow.on("close", (e) => {
                e.preventDefault()
                app.hide()
            })
            const testSocket = new ws("ws://localhost:1765")
            testSocket.addEventListener("open", () => {
                testSocket.send("hello")
            })
        } catch (error) {
            console.log(error)
        }
    });
} catch (error) {
    console.log(error)
}