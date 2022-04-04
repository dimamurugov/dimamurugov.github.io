import { rootReducer } from "./rootReducer"

export enum ActionTypes {
    INPUT_INTERVAL = 'INPUT_INTERVAL',
    ADD_MESSAGE = 'ADD_MESSAGE',
    ADD_TIMER_ID = 'ADD_TIMER_ID',
    CLEAR_MESSAGES = 'CLEAR_MESSAGES',
}
export interface IInputInterval {
    type: typeof ActionTypes.INPUT_INTERVAL,
    interval: number
}

export interface IAddMessage {
    type: typeof ActionTypes.ADD_MESSAGE,
    message: string
}

export interface IAddTimerId {
    type: typeof ActionTypes.ADD_TIMER_ID,
    timerId: number
}

export type RootState = ReturnType<typeof rootReducer>