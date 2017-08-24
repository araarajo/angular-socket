import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  @Output() sendMessage = new EventEmitter();
  public textMessage: string;
  constructor() { }

  ngOnInit() {
  }

  public onClickSendMessage(message) {
    this.sendMessage.emit(message);
    this.textMessage = '';
  }

}
