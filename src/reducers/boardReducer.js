import {
    addEnemyPiece,
    addPieceToBoard,
    BOARD_COL_NUM,
    BOARD_ROW_NUM, fightEnd, fillBoard,
    fillEnemyBoard,
    generateBoard, moveEnemyPiece, movePiece, removeEnemyPieceFromBoard,
    removePieceFromBoard, togglePieceSelection, unSelectPiece
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

        case 'SET_STAGE':
            if (action.stage === 4) {
                board = fillEnemyBoard(board);
            }
            return board;

        case 'FILL':
            return fillBoard(board, action.color);

        case 'ENEMY_FILL':
            return fillEnemyBoard(board, action.color);

        case 'SELECT_PIECE':
            return togglePieceSelection(board, action.row, action.col);

        case 'PIECE_BOARD_TO_BOARD_PRE':
        case 'PIECE_BOARD_TO_BOARD':
            board = movePiece(board, action.from, action.to);
            return unSelectPiece(board);

        case 'FIGHT_END':
            return fightEnd(board, action.attacker, action.attacked);

        case 'RESET':
            return starter;

        case 'ENEMY_PIECE_TO_BOARD':
            return addEnemyPiece(board, action.row, action.col, action.piece);

        case 'REMOVE_ENEMY_PIECE':
            return removeEnemyPieceFromBoard(board, action.row, action.col);

        case 'ENEMY_PIECE_BOARD_TO_BOARD':
        case 'ENEMY_PIECE_BOARD_TO_BOARD_PRE':
            return moveEnemyPiece(board, action.from, action.to);

        default:
            return board;
    }
}
