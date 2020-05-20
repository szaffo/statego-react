import { addPieceBoard, BOARD_COL_NUM, BOARD_ROW_NUM, generateBoard, removePieceFromBoard } from '../js/boardFunctions';


const starter = generateBoard(BOARD_ROW_NUM, BOARD_COL_NUM);

export const boardReducer = (board = starter, action) => {
    switch (action.type) {
        case 'ADD_TO_BOARD':
            return addPieceBoard(board, action.piece, action.row, action.col);
        case 'REMOVE_FROM_BOARD':
            return removePieceFromBoard(board, action.row, action.col);
        default:
            return board;
    }
}
