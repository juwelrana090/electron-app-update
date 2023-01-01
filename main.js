const { app, BrowserWindow } = require('electron')
const path = require('path')
const { autoUpdater } = require('electron-updater')
const log = require('electron-log');

log.transports.file.resolvePath = () => path.join("D:/Working/My Pro/ElectronJS Coureses/auto-update/", 'logs/main.log');
log.info('Hello, log');
log.warn('Some problem appears');

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    // hardResetMethod: 'exit'
});

let mainWindow;
const createWindow = () => {
    // Create the browser window.
    autoUpdater.checkForUpdatesAndNotify()

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: false,
            nodeIntegration: true,
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile(`${__dirname}/index.html`)

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

app.on("ready", () => {
    createWindow();
})

autoUpdater.on("update-available", () => {
    log.info('update-available');
})

autoUpdater.on("download-progress", () => {
    log.info('download-progress');
})

app.on("window-all-closed", () => {

})