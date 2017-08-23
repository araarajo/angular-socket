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

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    SocketService,
    MessengerService,
    BroadcastEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
