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
        started: false
    }
}

/**
 * Toggles how comes next. Creates new Round
 * @param round
 * @returns Round
 */
export function toggleRound(round) {
    if (!round.started) return round;
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