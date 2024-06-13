const { app, BrowserWindow } = require('electron')
const path = require('path');

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

const createWindow = () => {
    const win = new BrowserWindow({
        width: 900,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: true,
        },
    })

    win.loadFile('dist/index.html')
}

app.whenReady().then(()=>{
    createWindow()
})
