import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../services/messenger.service';
import { BroadcastEventService } from '../../services/broadcast-event.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private messengerService: MessengerService,
              private broadcaseEvent: BroadcastEventService) {
    this.broadcaseEvent.on('message')
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnInit() {
    this.messengerService.connect();
  }

  sendMessage() {
    this.messengerService.sendMessage('test');
  }

}
