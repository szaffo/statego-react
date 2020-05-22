import { stageReducer } from './stageReducer'
import { roundReducer } from './roundReducer'
import { pieceReducer } from "./pieceReducer";
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    stage: stageReducer, 
    round: roundReducer,
    pieces: pieceReducer
});