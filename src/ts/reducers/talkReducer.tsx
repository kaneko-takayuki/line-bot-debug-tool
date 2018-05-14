import * as _ from 'lodash';

import {
  ChangeMessageAction,
  AddMessageLogAction,
  TalkAction,
  TalkActionTypes,
} from '../actions/talk';
import Message from '../dto/Message';

export interface talkProps {
  messageText: string;
  messageLog: Message[];
}

export const initTalkProps = {
  messageText: '',
  messageLog: [],
};

export function talkReducer(state: talkProps = initTalkProps, action: TalkAction) {
  switch (action.type) {
    // メッセージを変更
    case TalkActionTypes.CHANGE_MESSAGE: {
      const _action = action as ChangeMessageAction;
      return {
        ...state,
        messageText: _action.payload.messageText,
      };
    }
    // メッセージを受け取った
    case TalkActionTypes.ADD_MESSAGE_LOG: {
      const _action = action as AddMessageLogAction;
      return {
        ...state,
        messageLog: _.concat(state.messageLog, _action.payload.message),
      };
    }
    default:
      return state;
  }
}
