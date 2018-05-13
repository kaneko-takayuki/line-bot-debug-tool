import { TalkAction, TalkActionTypes } from '../actions/talk';

export interface talkProps {
  message: string;
}

export const initTalkProps = {
  message: 'default',
};

export function talkReducer(state: talkProps = initTalkProps, action: TalkAction) {
  switch (action.type) {
    // メッセージを変更
    case TalkActionTypes.CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
}
