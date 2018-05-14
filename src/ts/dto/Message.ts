export default class Message {
  user: string;
  text: string;
  date: Date;

  constructor(user: string = '', text: string = '') {
    this.user = user;
    this.text = text;
    this.date = new Date();
  }
}
