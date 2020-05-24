import {generateRound, toggleRound} from "../functions/roundFunctions";

const starter = generateRound();

export const roundReducer = (round = starter, action) => {
    switch (action.type) {
        case 'FIGHT_END':
        case 'PIECE_BOARD_TO_BOARD':
        case 'TOGGLE_ROUND':
            return toggleRound(round);

        case 'RESET':
            return starter;

        default:
            return round;
    }
}
