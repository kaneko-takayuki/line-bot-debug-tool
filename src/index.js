import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import App from './js/App';
import rootReducer from './js/reducers'


/* 状態遷移(reducers)をstoreとして取得 */
// const store = createStore(lineBotDebugApp);

/* アプリケーションをstoreを指定して描画 */
let store = createStore(rootReducer, applyMiddleware(thunk, logger));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
