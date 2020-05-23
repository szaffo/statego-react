import {deepCopy} from "./generalFunctions";

export function generateFightObject() {
    return {
        on: false,
        attacked: null,
        attacker: null
    }
}

export function startFight(fight, attacker, attacked) {
    fight = deepCopy(fight);
    fight.on = true;
    fight.attacker = attacker;
    fight.attacked = attacked;
    return fight;
}

export function stopFight(fight) {
    fight = deepCopy(fight);
    fight.on = false;
    fight.attacker = null;
    fight.attacked = null;
    return fight;
}

/**
 * Determinate if an attacker Piece can defeat the attacked Piece
 * @param attacker Piece
 * @param attacked Piece
 * @returns {boolean}
 */
export function canDefeat(attacker, attacked) {
    return defeatTable[attacked.type].includes(attacker.type);
}

/**
 * key: [value] table, where value holds all the types that can defeat key.
 */
const defeatTable = {
    'bomb': ['3'],
    'flag': ['bomb', '1', '2', '3', '4', '6', '8', '10'],
    '1': ['bomb', '2', '3', '4', '6', '8'],
    '2': ['bomb', '3', '4', '6', '8', '10'],
    '3': ['4', '6', '8', '10'],
    '4': ['bomb', '6', '8', '10'],
    '6': ['bomb', '8', '10'],
    '8': ['bomb', '10'],
    '10': ['bomb', '1']
}
