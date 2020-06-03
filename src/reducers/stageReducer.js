export const stageReducer = (stage = 1, action) => {
    switch (action.type) {
        case 'SET_STAGE':
            return action.stage;

        case 'ROOM_CREATED':
            return 2;

        case 'RESET':
            return action.stage;

        case 'ROOM_IS_FULL':
            return 3;

        case 'BOTH_READY':
            return 4;

        default:
            return stage;
    }
}
