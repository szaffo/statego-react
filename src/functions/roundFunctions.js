import {deepCopy} from "./generalFunctions";

/**
 * Generates the first round
 * @returns Round
 */
export function generateRound() {
    return  {
        player_1: 'blue',
        player_2: 'red',
        now: 'blue',
        red: 'Játékos 1',
        blue: 'Játékos 2',
        roomId: null,
        thisPlayerIs: 0
    }
}

/**
 * Toggles how comes next. Creates new Round
 * @param round
 * @returns Round
 */
export function toggleRound(round) {
    round = deepCopy(round);
    switch (round.now) {
        case round.player_1:
            round.now = round.player_2;
            break;

        case round.player_2:
            round.now = round.player_1;
            break;

        default:
            return round;
    }

    return round;
}

/**
 * Returns the player name witch belongs to the given color
 * @param round
 * @param color {'red'|'blue'}
 * @returns {string}
 */
export function getPlayerName(round, color) {
    switch (color) {
        case 'red':
            return round.red;
        case 'blue':
            return round.blue;
        default:
            return 'Ismeretlen'
    }
}

/**
 * Sets the room id. Creates new round
 * @param round
 * @param roomId
 * @returns {round}
 */
export function setRoomId(round, roomId) {
    round = deepCopy(round);
    round.roomId = roomId;
    return round;
}

/**
 * Set the current user's number. Creates a new round
 * @param round
 * @param number
 * @returns {round}
 */
export function setPlayerNumber(round, number) {
    round = deepCopy(round);
    round.thisPlayerIs = number;
    return round;
}