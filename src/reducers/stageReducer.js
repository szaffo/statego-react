export const stageReducer = (stage = 1, action) => {
    switch (action.type) {
        case 'SET_STAGE':
            return action.stage;

        case 'ROOM_CREATED':
            return 2;

        case 'FILL':
            return 4;

        case 'RESET':
            return 1;

        case 'ROOM_IS_FULL':
            return 3;

        default:
            return stage;
    }
}
