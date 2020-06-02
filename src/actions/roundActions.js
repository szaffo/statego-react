export function toggleRound() {
    return {
        type: 'TOGGLE_ROUND'
    }
}

export function reset() {
    return {
        type: 'RESET'
    }
}

export function roomIsFull(playerNumber) {
    return {
        type: 'ROOM_IS_FULL',
        playerNumber
    }
}