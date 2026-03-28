const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Kalyan Smart Student System",
    autoHideMenuBar: true, // Hides the default Windows menu bar
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  // Load your specific local server URL
  win.loadURL('http://127.0.0.1:52002')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})