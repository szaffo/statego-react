export const stageReducer = (state = 1, action) => {
    switch (action.type) {
        case 'SETSTAGE':
            return action.stage;
        default:
            return state;
    }
}
