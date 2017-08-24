import { ActionReducerMap } from '@ngrx/store';
import * as fromMessage from './message.reducer';

export interface AppStore {
  messageReducer: fromMessage.State;
};

export const reducers: ActionReducerMap<AppStore> = {
  messageReducer: fromMessage.reducer
};
