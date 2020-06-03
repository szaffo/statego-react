import {getSizeOfBoard} from "../functions/boardFunctions";

export const roundMiddleware = (store) => (next) => (action) => {
    const state = store.getState();

    // If the action has no owner tag, it can pass
    if (!action.owner) {
        next(action);
        return;
    }

    // If action has owner tag, but it comes from the enemy,
    // there should some changes in some cases
    if (action.owner !== state.round.thisPlayerIs) {
        switch (action.type) {

            // When the enemy puts a piece onto his board, we have to
            // put it somewhere else in our board. And also don't need it
            // remove from the hand
            case 'PIECE_HAND_TO_BOARD':
                action.type = 'ENEMY_PIECE_TO_BOARD';
                break;


            // When the enemy removes a piece from his board, we remove it
            // also, but don't put it to the hand.
            case 'PIECE_BOARD_TO_HAND':
                action.type = 'REMOVE_ENEMY_PIECE';
                break;

            // Fires when enemy toggles it's ready state
            case 'TOGGLE_PLAYER_READY':
                action.type = 'TOGGLE_ENEMY_READY';
                break;

            // Triggered when a player moves his Piece on the board, during the game
            case 'PIECE_BOARD_TO_BOARD':
                action.type = 'ENEMY_PIECE_BOARD_TO_BOARD';
                break;

            // Triggered when a player moves his Piece on the board, during the setup stage
            case 'PIECE_BOARD_TO_BOARD_PRE':
                action.type = 'ENEMY_PIECE_BOARD_TO_BOARD_PRE';
                break;

            // For development speedup only
            case 'FILL':
                action.type = 'ENEMY_FILL';
                break;

            // When the enemy is attacking, we have to rotate the coordinates
            case 'FIGHT_START':
                const bSize = getSizeOfBoard(state.pieces.board);

                action.attacker.row = Math.abs(action.attacker.row - bSize.rows + 1);
                action.attacker.col = Math.abs(action.attacker.col - bSize.cols + 1);

                action.attacked.row = Math.abs(action.attacked.row - bSize.rows + 1);
                action.attacked.col = Math.abs(action.attacked.col - bSize.cols + 1);
                break;

            case 'RESET':
                action.color = state.round.thisPlayerColor;
                break;

            default:
                break;

        }
    }

    // After the needed changes are done to the action,
    // we passing it to the new middleware.
    next(action);
}