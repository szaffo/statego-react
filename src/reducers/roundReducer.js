import {generateRound, toggleRound} from "../functions/roundFunctions";

const starter = generateRound();

export const roundReducer = (round = starter, action) => {
    switch (action.type) {
        case 'PIECE_BOARD_TO_BOARD':
        case 'TOGGLE_ROUND':
            return toggleRound(round);
        default:
            return round;
    }
}
