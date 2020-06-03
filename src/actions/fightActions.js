/**
 * @param attacker {{row: number, col: number}}
 * @param attacked {{row: number, col: number}}
 * @returns {{attacker: {row: number, col: number}, attacked: {row: number, col: number}, type: 'FIGHT_START'}}
 */
export function fightStart(attacker, attacked) {
    return {
        type: 'FIGHT_START',
        attacker, attacked
    }
}

/**
 * @param attacker {{row: number, col: number}}
 * @param attacked {{row: number, col: number}}
 * @returns {{attacker: {row: number, col: number}, attacked: {row: number, col: number}, type: 'FIGHT_END'}}
 */
export function fightEnd(attacker, attacked) {
    return {
        type: 'FIGHT_END',
        attacker, attacked
    }
}

/**
 * @param attacker {{row: number, col: number}}
 * @returns {{attacker: {row: number, col: number}, type: 'VICTORY'}}
 */
export function victory(attacker) {
    return {
        type: 'VICTORY',
        attacker
    }
}