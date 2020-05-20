export const roundReducer = (round = true, action) => {
    switch (action.type) {
        case 'TOGGLEROUND':
            return !round;
        case 'ENEMYROUND':
            return false;
        case 'YOURROUND':
            return true;
        default:
            return round;
    }
}
