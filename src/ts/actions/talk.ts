import { Action } from 'redux';

// アクション
export const TalkActionTypes = {
  CHANGE_MESSAGE: Symbol(),
  SEND_MESSAGE: Symbol(),
};

// メッセージ変更アクション
export interface ChangeMessageAction extends Action {
  readonly type: typeof TalkActionTypes.CHANGE_MESSAGE;
  readonly payload: {
    message: string,
  };
}

// メッセージ送信アクション
export interface SendMessageAction extends Action {
  readonly type: typeof TalkActionTypes.SEND_MESSAGE;
  readonly payload: {
    message: string,
  };
}

// talkのアクションを全て統合したもの
export type TalkAction = ChangeMessageAction | SendMessageAction;

/**
 * メッセージを変更する
 * @param {string} message
 * @returns {ChangeMessageAction}
 */
export function changeMessage(message: string): ChangeMessageAction {
  return {
    type: TalkActionTypes.CHANGE_MESSAGE,
    payload: {
      message,
    },
  };
}

/**
 * メッセージを送信する
 * @param {string} message
 * @returns {any}
 */
export function sendMessage(message: string): any {
  return (dispatch) => {
    fetch(`http://localhost:5000/send-message?message=${message}`)
      .then(response => response.json())
      .then(result => dispatch(successSendMessage(result.message)))
      .catch(error => console.log(error));
  };
}

/**
 * メッセージ送信に成功した
 * @param {string} message
 * @returns {SendMessageAction}
 */
export function successSendMessage(message: string): SendMessageAction {
  return {
    type: TalkActionTypes.SEND_MESSAGE,
    payload: {
      message: '',
    },
  };
}
