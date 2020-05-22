import {
    addPieceToBoard,
    BOARD_COL_NUM,
    BOARD_ROW_NUM,
    fillEnemyBoard,
    generateBoard,
    removePieceFromBoard
} from '../functions/boardFunctions';


const starter = generateBoard(BOARD_ROW_NUM, BOARD_COL_NUM);

export const boardReducer = (board = starter, action) => {
    switch (action.type) {
        case 'ADD_ENEMY_PIECES':
            return fillEnemyBoard(board);

        case 'PIECE_HAND_TO_BOARD':
            return addPieceToBoard(board, action.piece, action.row, action.col);

        case 'PIECE_BOARD_TO_HAND':
            return removePieceFromBoard(board, action.row, action.col);

        case 'SETSTAGE':
            if (action.stage === 4) {
                board = fillEnemyBoard(board);
            }
            return board;

        default:
            return board;
    }
}
