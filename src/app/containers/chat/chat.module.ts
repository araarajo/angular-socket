import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatContentComponent } from '../../components/chat-content/chat-content.component';
import { ChatInputComponent } from '../../components/chat-input/chat-input.component';
import { FormsModule } from '@angular/forms';
import { ChatRouter } from './chat.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRouter,
  ],
  declarations: [
    ChatComponent,
    ChatContentComponent,
    ChatInputComponent
  ]
})
export class ChatModule { }
