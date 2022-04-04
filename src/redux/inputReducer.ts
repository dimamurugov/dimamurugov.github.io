import { ActionTypes, IInputInterval } from "./types";

const iitialState = {
    interval: 1,
}

export const inputReducer = (state = iitialState, action: IInputInterval) => {
    switch (action.type) {
        case ActionTypes.INPUT_INTERVAL:
          return {
            ...state,
            interval: action.interval
          };
      
        default:
          return state;
    }
}