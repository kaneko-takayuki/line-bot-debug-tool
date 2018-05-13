import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './js/App';
import rootReducer from './js/reducers'

/* 状態遷移(reducers)をstoreとして取得 */
// const store = createStore(lineBotDebugApp);

/* アプリケーションをstoreを指定して描画 */
let store = createStore(rootReducer);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
