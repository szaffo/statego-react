export function toggleRound() {
    return {
        type: 'TOGGLE_ROUND'
    }
}

export function reset(color, stage) {
    return {
        type: 'RESET',
        color,
        stage
    }
}

export function roomIsFull(playerNumber, roomId) {
    return {
        type: 'ROOM_IS_FULL',
        playerNumber, roomId
    }
}

export function togglePayerReady() {
    return {
        type: 'TOGGLE_PLAYER_READY'
    }
}

export function toggleEnemyReady() {
    return {
        type: 'TOGGLE_ENEMY_READY'
    }
}

export function bothPlayersReady() {
    return {
        type: 'BOTH_READY',
        first: Math.round(Math.random() + 1)
    }
}