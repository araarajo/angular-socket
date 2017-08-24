import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MessageModel } from '../../models/message.model';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatContentComponent implements OnInit {
  @Input() messageList: MessageModel[];
  constructor() { }

  ngOnInit() {
  }

}
