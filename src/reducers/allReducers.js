import { stageReducer } from './stageReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    stage: stageReducer
});