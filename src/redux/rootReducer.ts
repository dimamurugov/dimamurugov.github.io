import { combineReducers } from 'redux';
import { inputReducer } from './inputReducer';
import { messageReducer } from './messageReducer';
import { addTimerIdReducer } from './addTimerIdReducer';

export const rootReducer = combineReducers({
    inputReducer,
    messageReducer,
    addTimerIdReducer
});