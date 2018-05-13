import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import App from './components/App';
// import lineBotDebugApp from './reducers'

/* 状態遷移(reducers)をstoreとして取得 */
// const store = createStore(lineBotDebugApp);

/* アプリケーションをstoreを指定して描画 */
render(
  <App />,
  document.getElementById('root')
);
