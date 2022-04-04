import { ActionTypes, IAddTimerId } from "./types";

const initialState = {
    timerId: 0,
}

export const addTimerIdReducer = (state = initialState, action: IAddTimerId) => {
    switch (action.type) {
        case ActionTypes.ADD_TIMER_ID:
          return {
            ...state,
            timerId: action.timerId
          };
      
        default:
          return state;
    }
}