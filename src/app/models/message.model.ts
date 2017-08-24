export class MessageModel {
  sender: string;
  content: string;
  date: Date;

  constructor(object) {
    this.sender = object.sender || 'unknown';
    this.content = object.content || '';
    this.date = object.date || new Date();
  };
}
