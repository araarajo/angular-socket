import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SocketService } from './services/socket.service';
import { MessengerService } from './services/messenger.service';
import { BroadcastEventService } from './services/broadcast-event.service';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { MessageSelect } from './selects/message.select';
import { LoggerService } from './services/logger.service';
import { ChatModule } from './containers/chat/chat.module';
import { RootRouter } from './app.routes';
import { ErrorComponent } from './containers/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RootRouter,
    StoreModule.forRoot(reducers),
    ChatModule,
  ],
  providers: [
    SocketService,
    MessengerService,
    BroadcastEventService,
    MessageSelect,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
