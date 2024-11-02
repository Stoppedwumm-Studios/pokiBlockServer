const {BrowserWindow, app} = require('electron');
const path = require('path');
const { electron } = require('process');

app.on('ready', () => {
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
    new WebSocket("ws://localhost:1765").onmessage = (message) => {
        console.log(message.data)
    }
});