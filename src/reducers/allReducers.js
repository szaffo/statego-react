import { stageReducer } from './stageReducer'
import { roundReducer } from './roundReducer'
import { pieceReducer } from "./pieceReducer";
import { combineReducers } from 'redux'
import { fightReducer } from "./fightReducer";

export const reducer = combineReducers({
    stage: stageReducer, 
    round: roundReducer,
    pieces: pieceReducer,
    fight: fightReducer
});