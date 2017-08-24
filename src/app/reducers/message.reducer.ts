import * as messageAction from '../actions/message.action';
import { MessageModel } from '../models/message.model';

export interface MessageState {
  entities: Array<MessageModel>;
};

const initialState: MessageState = {
  entities: []
};

export function messageReducer(state = initialState, action: messageAction.Actions): MessageState {
  switch ( action.type ) {
    case messageAction.ActionTypes.ADD_MESSAGE: {
      const message = action.payload;
      return Object.assign({}, state, {
        entities: [...state.entities, message]
      });
    }
    default:
      return state;
  }
}
