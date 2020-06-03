import {deepCopy} from "./generalFunctions";

/**
 * Generates the first round
 * @returns Round
 */
export function generateRound() {
    return  {
        now: 0,
        red: 'Piros',
        blue: 'Kék',
        roomId: null,
        thisPlayerIs: 0,
        playerReady: false,
        enemyReady: false
    }
}

/**
 * Toggles how comes next. Creates new Round object.
 * @param round
 * @returns Round
 */
export function toggleRound(round) {
    round = deepCopy(round);
    round.now = Math.abs(round.now  - 3);
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
 * Set the current user's number. Creates a new round.
 * @param round
 * @param number
 * @returns {round}
 */
export function setPlayerNumber(round, number) {
    round = deepCopy(round);
    round.thisPlayerIs = number;
    round.thisPlayerColor = (number === 1)? 'blue' : 'red';
    return round;
}


/**
 * Toggle enemy's ready state. Returns a new round object.
 * @param round
 * @returns {round}
 */
export function toggleEnemyReady(round) {
    round = deepCopy(round);
    round.enemyReady = !round.enemyReady;
    return round;
}


/**
 * Toggle the player's ready state. Returns a new round object.
 * @param round
 * @returns {round}
 */
export function togglePlayerReady(round) {
    round = deepCopy(round);
    round.playerReady = !round.playerReady;
    return round;
}

/**
 * Choose a random starter. Creates a new round object.
 * @param round
 * @param first {1|2}
 * @returns {round}
 */
export function setFirstPlayer(round, first) {
    round = deepCopy(round);
    round.now = first;
    return round;
}

/**
 * Returns true if this player comes in the current round
 * @param round
 * @returns {boolean}
 */
export function playerComes(round) {
    return round.now === round.thisPlayerIs
}