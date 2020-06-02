import {generateRound, setPlayerNumber, setRoomId, toggleRound} from "../functions/roundFunctions";

const starter = generateRound();

export const roundReducer = (round = starter, action) => {
    switch (action.type) {
        case 'FIGHT_END':
        case 'PIECE_BOARD_TO_BOARD':
        case 'TOGGLE_ROUND':
            return toggleRound(round);

        case 'RESET':
            return starter;

        case 'ROOM_CREATED':
            return setRoomId(round, action.roomId);

        case 'ROOM_IS_FULL':
            return setPlayerNumber(round, action.playerNumber);

        default:
            return round;
    }
}
