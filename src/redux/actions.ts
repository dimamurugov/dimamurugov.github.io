import { ActionTypes } from "./types";
import { IInputInterval, IAddTimerId, IAddMessage } from './types';

export function inputInterval(interval: number): IInputInterval {
    return {
        type: ActionTypes.INPUT_INTERVAL,
        interval
    }
}

export function addMessage(message: string): IAddMessage {
    return {
        type: ActionTypes.ADD_MESSAGE,
        message
    }
}

export function addTimerId(timerId: number): IAddTimerId {
    return {
        type: ActionTypes.ADD_TIMER_ID,
        timerId
    }
}