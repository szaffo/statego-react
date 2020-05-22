export const stageReducer = (stage = 1, action) => {
    switch (action.type) {
        case 'SETSTAGE':
            return action.stage;
        default:
            return stage;
    }
}
