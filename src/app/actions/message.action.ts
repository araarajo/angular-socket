import { MessageModel } from '../models/message.model';
import { Action } from '@ngrx/store';

export const ActionTypes = {
  ADD_MESSAGE: 'add message'
};

export class AddMessageAction implements Action {
  type = ActionTypes.ADD_MESSAGE;

  constructor(public payload: MessageModel) {
  }
}

export type Actions =
  AddMessageAction;
