import {deepCopy} from "./generalFunctions";

export function generateFightObject() {
    return {
        on: false,
        attacked: null,
        attacker: null,
        won: null
    }
}

/**
 * Starts a fight
 * @param fight
 * @param attacker
 * @param attacked
 * @returns {Fight}
 */
export function startFight(fight, attacker, attacked) {
    fight = deepCopy(fight);
    fight.on = true;
    fight.attacker = attacker;
    fight.attacked = attacked;
    return fight;
}

/**
 * Stops the fight
 * @param fight
 * @returns {Fight}
 */
export function stopFight(fight) {
    fight = deepCopy(fight);
    fight.on = false;
    fight.attacker = null;
    fight.attacked = null;
    return fight;
}

/**
 * Determinate if the attacked Piece can defeated by the attacker Piece
 * @param attacker Piece
 * @param attacked Piece
 * @returns {boolean}
 */
export function canDefeat(attacker, attacked) {
    return defeatTable[attacked.type].includes(attacker.type);
}

/**
 * Chekc if somebody already won
 * @param fight
 * @returns {boolean}
 */
export function hasWon(fight) {
    return fight.won !== null;
}

/**
 * Returns true if a fight is started
 * @param fight
 * @returns {boolean}
 */
export function isFightStarted(fight) {
    return fight.on;
}

/**
 * Sets who won
 * @param fight
 * @param attacker
 * @returns {Fight}
 */
export function victory(fight, attacker) {
    fight = deepCopy(fight);
    fight.won = attacker.color;
    fight.on = false;
    return fight;
}

/**
 * Returns the color of the winner
 * @param fight
 * @returns {'red' | 'blue'}
 */
export function getWinnerColor(fight) {
    if (!hasWon(fight)) return '';
    return fight.won;
}

/**
 * key: [value] table, where value holds all the types that can defeat key.
 */
const defeatTable = {
    'bomb': ['3'],
    'flag': ['bomb', '1', '2', '3', '4', '6', '8', '10'],
    '1': ['bomb', '1', '2', '3', '4', '6', '8'],
    '2': ['bomb', '2', '3', '4', '6', '8', '10'],
    '3': ['3', '4', '6', '8', '10'],
    '4': ['bomb', '4', '6', '8', '10'],
    '6': ['bomb', '6', '8', '10'],
    '8': ['bomb', '8', '10'],
    '10': ['bomb', '1', '10']
}
