import {generateRound, toggleRound} from "../functions/roundFunctions";

const starter = generateRound('Martin', 'Petra', 'Petra');

export const roundReducer = (round = starter, action) => {
    switch (action.type) {
        case 'TOGGLE_ROUND':
            return toggleRound(round);
        default:
            return round;
    }
}
