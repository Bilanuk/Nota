const { app, BrowserWindow } = require("electron");
const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1200,
        height: 800,
        title: 'Nota',
        minHeight: 800,
        minWidth: 500,
        webPreferences: {
            nodeIntegration: true,
            autoplayPolicy: "user-gesture-required"
        }
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));
}

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

app.on("ready", loadMainWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});
