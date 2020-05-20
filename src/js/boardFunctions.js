export const BOARD_ROW_NUM = 6;
export const BOARD_COL_NUM = 6;

export function generateBoard(numOfRows, numOfCols) {
    let board = [];
    let row = [];
    for (let i = 0; i < numOfRows; i++) {
        row = [];
        for (let k = 0; k < numOfCols; k++) {
            row.push(null);
        }
        board.push(row);
    }
    return board
}

export function copyBoard(board) {
    return JSON.parse(JSON.stringify(board));
}

export function addPieceBoard(board, piece, row, col) {
    let cell = board[row][col];
    if (cell === null) {
        board[row][col] = piece;
    }

    return copyBoard(board);
}

export function removePieceFromBoard(board, row, col) {
    board[row][col] = null;
    return copyBoard(board);
}

export function getSizeOfBoard(board) {
    return {
        rows: board.length,
        cols: board[0].length
    }
}