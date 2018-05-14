export default class Message {
  user: string;
  text: string;

  constructor(user: string = '', text: string = '') {
    this.user = user;
    this.text = text;
  }
}
