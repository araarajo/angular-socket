import * as messageAction from '../actions/message.action';
import { MessageModel } from '../models/message.model';

export interface State {
  entities: Array<MessageModel>;
};

const initialState: State = {
  entities: []
};

export function reducer(state = initialState, action: messageAction.Actions): State {
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
