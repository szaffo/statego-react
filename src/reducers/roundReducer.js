import {
    generateRound, setFirstPlayer,
    setPlayerNumber,
    setRoomId,
    toggleEnemyReady,
    togglePlayerReady,
    toggleRound
} from "../functions/roundFunctions";

const starter = generateRound();

export const roundReducer = (round = starter, action) => {
    switch (action.type) {
        case 'FIGHT_END':
        case 'PIECE_BOARD_TO_BOARD':
        case 'ENEMY_PIECE_BOARD_TO_BOARD':
        case 'TOGGLE_ROUND':
            return toggleRound(round);

        case 'RESET':
            round = toggleEnemyReady(round);
            return togglePlayerReady(round);

        case 'ROOM_CREATED':
            return setRoomId(round, action.roomId);

        case 'ROOM_IS_FULL':
            round = setRoomId(round, action.roomId);
            return setPlayerNumber(round, action.playerNumber);

        case 'TOGGLE_ENEMY_READY':
            return toggleEnemyReady(round);

        case 'TOGGLE_PLAYER_READY':
            return togglePlayerReady(round);

        case 'BOTH_READY':
            return setFirstPlayer(round, action.first);

        default:
            return round;
    }
}
