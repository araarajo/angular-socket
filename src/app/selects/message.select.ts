import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../reducers/index';
import { Observable } from 'rxjs/Observable';
import { MessageModel } from '../models/message.model';

@Injectable()
export class MessageSelect {
  constructor(private store: Store<AppStore>) {
  }

  getMessageList(): Observable<MessageModel[]> {
    return this.store.select(reducerMap => reducerMap.messageReducer.entities);
  }
}
