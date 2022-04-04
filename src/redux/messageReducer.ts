import { ActionTypes, IAddMessage } from "./types";

const iitialState: { messages: string[] } = {
    messages: []
}

export const messageReducer = (state = iitialState, action: IAddMessage) => {
    switch (action.type) {
        case ActionTypes.ADD_MESSAGE:
          return {
            ...state,
            messages: [...state.messages, action.message]
          };
      
        default:
          return state;
    }
}