export function fightOn(attacker, attacked) {
    return {
        type: 'FIGHT_ON',
        attacker, attacked
    }
}

export function fightOff(attacker, attacked) {
    return {
        type: 'FIGHT_OFF',
        attacker, attacked
    }
}