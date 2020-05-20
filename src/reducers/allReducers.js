import { stageReducer } from './stageReducer'
import { roundReducer } from './roundReducer'
import { handReducer } from './handReducer'
import { boardReducer } from './boardReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    stage: stageReducer, 
    round: roundReducer,
    hand: handReducer,
    board: boardReducer
});