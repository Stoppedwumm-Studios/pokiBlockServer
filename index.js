try {
    const { BrowserWindow, app } = require('electron');
    const path = require('path');
    const { electron } = require('process');

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
        } catch (error) {
            console.log(error)
        }
    });
} catch (error) {
    console.log(error)
}