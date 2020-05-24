export function fightStart(attacker, attacked) {
    return {
        type: 'FIGHT_START',
        attacker, attacked
    }
}

export function fightEnd(attacker, attacked) {
    return {
        type: 'FIGHT_END',
        attacker, attacked
    }
}

export function victory(attacker) {
    return {
        type: 'VICTORY',
        attacker
    }
}