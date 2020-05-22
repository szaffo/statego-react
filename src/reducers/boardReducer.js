import {
    addPieceToBoard,
    BOARD_COL_NUM,
    BOARD_ROW_NUM, fillBoard,
    fillEnemyBoard,
    generateBoard, movePiece,
    removePieceFromBoard, rotateBoard, togglePieceSelection, unSelectPiece
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

        case 'SET_TAGE':
            if (action.stage === 4) {
                board = fillEnemyBoard(board);
            }
            return board;

        case 'FILL':
            board = fillEnemyBoard(board);
            return fillBoard(board);

        // case 'TOGGLE_ROUND':
        //     return rotateBoard(board);

        case 'SELECT_PIECE':
            return togglePieceSelection(board, action.row, action.col);

        case 'PIECE_BOARD_TO_BOARD':
            board = movePiece(board, action.from, action.to);
            return unSelectPiece(board);

        default:
            return board;
    }
}
