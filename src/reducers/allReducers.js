import { combineReducers } from 'redux'
import { stageReducer } from './stageReducer'
import { roundReducer } from './roundReducer'
import { pieceReducer } from "./pieceReducer";
import { fightReducer } from "./fightReducer";
import { errorReducer } from "./errorReducer";

export const reducer = combineReducers({
    stage: stageReducer, 
    round: roundReducer,
    pieces: pieceReducer,
    fight: fightReducer,
    error: errorReducer
});