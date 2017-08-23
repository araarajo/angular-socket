import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../services/messenger.service';
import { BroadcastEventService } from '../../services/broadcast-event.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public messageList: Array<any> = [];
  public textMessage: string;

  constructor(private messengerService: MessengerService,
              private broadcaseEvent: BroadcastEventService) {
    this.broadcaseEvent.on('message')
      .subscribe(res => {
        console.log(res);
        this.messageList.push({sender: 'you', content: res, date: new Date()});
      });
  }

  ngOnInit() {
    this.messengerService.connect();
  }

  sendMessage(inputValue) {
    this.messageList.push({sender: 'me', content: inputValue, date: new Date()});
    this.messengerService.sendMessage(inputValue);
    this.textMessage = '';
  }

}
