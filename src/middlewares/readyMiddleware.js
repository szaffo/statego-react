import {bothPlayersReady} from "../actions/roundActions";

export const readyMiddleware = (store) => (next) => (action) => {
    const state = store.getState();

    // This middleware only cares about ready state changes.
    // If both player is ready, it triggers a new action
    switch (action.type) {
        // When player is ready, ant enemy is already ready
        // we dispatch a new action to tell the Stager everybody
        // is ready and it should switch to tha game area.
        // This new action will be synced across the players.
        case 'TOGGLE_PLAYER_READY':
            if (state.round.enemyReady) {
                store.dispatch(bothPlayersReady());
            }
            break;

        default:
            break;
    }
    next(action);
}