import { combineReducers } from 'redux';

import { talkReducer } from './talkReducer';

const rootReducer = combineReducers({ talkReducer });

export default rootReducer;
