const { app, BrowserWindow } = require('electron');

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	});
	win.loadFile('index.html');
}

app.WhenReady().then(createWindow);