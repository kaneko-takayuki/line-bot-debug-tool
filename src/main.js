const {app, BrowserWindow} = require('electron');

// 表示するウィンドウ
let window = null;

// 起動時の処理
app.on('ready', () => {
  // ウィンドウの生成
  window = new BrowserWindow({width: 800, height: 600, minWidth: 800, minHeight: 600});
  window.loadURL(`file://${__dirname}/../build/index.html`);

  // デバッグツールはデフォルトOFF.
  //win.webContents.openDevTools()

  // ウィンドウをクローズした時の処理
  window.on('closed', () => {
    window = null
  })
});

// 全てのウィンドウがクローズされた時の処理
app.on('window-all-closed', () => {
  // MacOSだけは、ウィンドウが閉じられてもDockにプロセスを残す
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
