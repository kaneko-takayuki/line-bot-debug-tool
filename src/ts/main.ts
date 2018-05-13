const {app, BrowsermainWindow} = require('electron');

// 表示するウィンドウ
let mainWindow: any = null;

// 起動時の処理
app.on('ready', () => {
  // ウィンドウの生成
  mainWindow = new BrowsermainWindow({width: 800, height: 600});
  mainWindow.loadURL(`file://${__dirname}/../build/index.html`);

  // デバッグツールはデフォルトOFF.
  //win.webContents.openDevTools()

  // ウィンドウをクローズした時の処理
  mainWindow.on('closed', () => {
    mainWindow = null
  })
});

// 全てのウィンドウがクローズされた時の処理
app.on('mainWindow-all-closed', () => {
  // MacOSだけは、ウィンドウが閉じられてもDockにプロセスを残す
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
