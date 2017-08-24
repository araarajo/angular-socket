import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MessengerService } from '../../services/messenger.service';
import { BroadcastEventService } from '../../services/broadcast-event.service';
import { MessageModel } from '../../models/message.model';
import { Store } from '@ngrx/store';
import { AppStore } from '../../reducers/index';
import * as messageAction from '../../actions/message.action';
import { MessageSelect } from '../../selects/message.select';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit, OnDestroy {
  public messageList$: Observable<MessageModel[]>;
  public textMessage: string;

  private onMessageEvent: Subscription;

  constructor(private messengerService: MessengerService,
              private broadcaseEvent: BroadcastEventService,
              private store: Store<AppStore>,
              private messageSelect: MessageSelect) {
    this.onMessage();
    this.messageList$ = this.messageSelect.getMessageList();
  }

  ngOnInit() {
    this.messengerService.connect();
  }

  ngOnDestroy() {
    this.onMessageEvent.unsubscribe();
  }

  private onMessage() {
    this.onMessageEvent = this.broadcaseEvent.on('message')
      .subscribe(res => {
        console.log(res);
        const message = new MessageModel({
          sender: 'you',
          content: res
        });
        this.store.dispatch(new messageAction.AddMessageAction(message));
      });
  }

  public sendMessage(inputValue) {
    const message = new MessageModel({
      sender: 'me',
      content: inputValue
    });
    this.store.dispatch(new messageAction.AddMessageAction(message));
    this.messengerService.sendMessage(inputValue);
    this.textMessage = '';
  }

}
