import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './containers/chat/chat.component';
import { SocketService } from './services/socket.service';
import { MessengerService } from './services/messenger.service';
import { BroadcastEventService } from './services/broadcast-event.service';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { MessageSelect } from './selects/message.select';
import { ChatContentComponent } from './components/chat-content/chat-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    SocketService,
    MessengerService,
    BroadcastEventService,
    MessageSelect
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
