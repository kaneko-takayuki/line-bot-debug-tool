import { Action } from 'redux';

// アクション
export const TalkActionTypes = {
  CHANGE_MESSAGE: Symbol(),
};

// メッセージ変更アクション
export interface ChangeMessageAction extends Action {
  readonly type: typeof TalkActionTypes.CHANGE_MESSAGE;
  readonly payload: {
    message: string,
  };
}

// talkのアクションを全て統合したもの
export type TalkAction = ChangeMessageAction;

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
