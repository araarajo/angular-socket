import { ActionReducerMap } from '@ngrx/store';
// import * as fromMessages from './message.reducer';
import { messageReducer, MessageState } from './message.reducer';

export interface AppStore {
  messageReducer: MessageState;
};

export const reducers: ActionReducerMap<AppStore> = {
  messageReducer
};
