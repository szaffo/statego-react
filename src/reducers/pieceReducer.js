import {combineReducers} from "redux";
import {boardReducer} from "./boardReducer";
import {handReducer} from "./handReducer";

export const pieceReducer = combineReducers(
    {
        hand: handReducer,
        board: boardReducer
    }
)