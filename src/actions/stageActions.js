export const setStageActive = (number) => {
    return {
        type: 'SET_STAGE',
        stage: number
    }
}

export const createRoom = () => {
    return {
        type: 'CREATE_ROOM'
    }
}

export function roomCreated(roomId) {
    return {
        type: 'ROOM_CREATED',
        roomId
    }
}

export function joinRoom(roomId) {
    return {
        type: 'JOIN_ROOM',
        roomId
    }
}