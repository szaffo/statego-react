export const stageReducer = (stage = 1, action) => {
    switch (action.type) {
        case 'SET_STAGE':
            return action.stage;

        case 'FILL':
            return 4;

        case 'RESET':
            return 1;

        default:
            return stage;
    }
}
