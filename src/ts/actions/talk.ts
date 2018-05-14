import { Action } from 'redux';

import Message from '../dto/Message';
import { DOMAIN_NAME, E_SEND_MESSAGE } from '../conf/endpoint';
import { ME, BOT } from '../conf/userName';

// アクション
export const TalkActionTypes = {
  CHANGE_MESSAGE: Symbol(),
  ADD_MESSAGE_LOG: Symbol(),
};

// メッセージ変更アクション
export interface ChangeMessageAction extends Action {
  readonly type: typeof TalkActionTypes.CHANGE_MESSAGE;
  readonly payload: {
    messageText: string,
  };
}

// メッセージログを追加するアクション
export interface AddMessageLogAction extends Action {
  readonly type: typeof TalkActionTypes.ADD_MESSAGE_LOG;
  readonly payload: {
    message: Message,
  };
}

// talkのアクションを全て統合したもの
export type TalkAction = ChangeMessageAction | AddMessageLogAction;

/**
 * メッセージを変更する
 * @param {string} messageText
 * @returns {ChangeMessageAction}
 */
export function changeMessage(messageText: string): ChangeMessageAction {
  return {
    type: TalkActionTypes.CHANGE_MESSAGE,
    payload: {
      messageText,
    },
  };
}

/**
 * メッセージをPOST送信する
 * @param {string} messageText
 * @returns {any}
 */
export function postMessage(messageText: string): any {
  const method = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({ messageText });

  return (dispatch) => {
    fetch(`${DOMAIN_NAME}/${E_SEND_MESSAGE}`, { method, headers, body })
      .then(response => response.json())
      .then(result => new Message(BOT, result.messageText))
      .then(message => dispatch(addMessageLog(message)))
      .catch(error => console.log(error));
  };
}

/**
 * メッセージを受け取ってログとして登録する
 * @param {Message} message
 * @returns {AddMessageLogAction}
 */
export function addMessageLog(message: Message): AddMessageLogAction {
  return {
    type: TalkActionTypes.ADD_MESSAGE_LOG,
    payload: {
      message,
    },
  };
}

/**
 * 自分のメッセージを送信する(登録する)
 * @param {string} messageText
 * @returns {any}
 */
export function sendMessage(messageText: string): any {
  return (dispatch) => {
    const message = new Message(ME, messageText);
    dispatch(addMessageLog(message));
  };
}
