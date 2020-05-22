export const BOARD_ROW_NUM = 6;
export const BOARD_COL_NUM = 6;

/**
 * Generates an empty cell
 * @returns {{piece: null, filled: boolean}}
 */
function generateCell() {
    return {
        filled: false,
        piece: null
    }
}

/**
 * Put a Piece into the cell, and creates a copy of the board
 * @param board
 * @param piece
 * @param row
 * @param col
 * @returns Board
 */
export function fillCell(board, piece, row, col) {
    let cell = board[row][col];
    cell.piece = piece;
    cell.filled = true;
    return deepCopy(board);
}

/**
 * Removes the Piece from the Cell. Creates a copy of the Board.
 * @param board
 * @param row
 * @param col
 * @returns {Board}
 */
export function eraseCell(board, row, col) {
    board[row][col].filled = false;
    board[row][col].piece = null;
    return deepCopy(board);
}

/**
 * Returns a copy of the Cell that is in the Board at the given position.
 * @param board
 * @param row
 * @param col
 * @returns {Piece}
 */
export function getCellFromBoard(board, row, col) {
    return deepCopy(board[row][col]);
}

/**
 * Returns the Piece from the Cell. Also creates a copy of it.
 * @param cell
 * @returns {Piece}
 */
export function getPieceFromCell(cell) {
    return deepCopy(cell.piece);
}

/**
 * Determinate if the Cell has a Piece in it
 * @param cell
 * @returns {boolean}
 */
export function isCellHasPiece(cell) {
    return cell.filled;
}

/**
 * Generates a new Piece with the given parameters
 * @param type
 * @param color
 * @returns {{color: string, type: string}}
 */
export function generatePiece(type, color) {
    return {
        type,
        color
    }
}

/**
 * Generates a board full of empty cells
 * @param numOfRows How many rows to generate
 * @param numOfCols How many columns to generate
 * @returns Board
 */
export function generateBoard(numOfRows, numOfCols) {
    let board = [];
    let row = [];
    for (let i = 0; i < numOfRows; i++) {
        row = [];
        for (let k = 0; k < numOfCols; k++) {
            row.push(generateCell());
        }
        board.push(row);
    }
    return board
}

/**
 * Creates a copy of the object via JSON stringify and parse
 * @param obj
 * @returns deep copy of obj
 */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Ads a Piece to the Board. Creates a deep copy of tht Board, if the Cell changed.
 * @param board
 * @param piece - A generatePiece() generated Piece
 * @param row
 * @param col
 * @returns Board
 */
export function addPieceToBoard(board, piece, row, col) {
    let cell = board[row][col];
    if (!isCellHasPiece(cell)) {
        return fillCell(board, piece, row, col);
    }
    return board;
}

/**
 * Removes a Piece from the Board. Creates a copy of the Board.
 * @param board
 * @param row
 * @param col
 * @returns {any}
 */
export function removePieceFromBoard(board, row, col) {
    return eraseCell(board, row, col);
}

/**
 * Returns an object that contains the size of the Board.
 * @param board
 * @returns {{rows: number, cols: number}}
 */
export function getSizeOfBoard(board) {
    return {
        rows: board.length,
        cols: board[0].length
    }
}

/**
 * Fills the Board with the enemy's Pieces.
 * It's only for testing purpose.
 * @param board
 */
export function fillEnemyBoard(board) {
    board = addPieceToBoard(board, generatePiece('flag', 'red'), 0, 0);
    board = addPieceToBoard(board, generatePiece('bomb', 'red'), 0, 1);
    board = addPieceToBoard(board, generatePiece('bomb', 'red'), 0, 2);
    board = addPieceToBoard(board, generatePiece('1', 'red'), 0, 3);
    board = addPieceToBoard(board, generatePiece('2', 'red'), 0, 4);
    board = addPieceToBoard(board, generatePiece('2', 'red'), 0, 5);
    board = addPieceToBoard(board, generatePiece('3', 'red'), 1, 0);
    board = addPieceToBoard(board, generatePiece('3', 'red'), 1, 1);
    board = addPieceToBoard(board, generatePiece('4', 'red'), 1, 2);
    board = addPieceToBoard(board, generatePiece('6', 'red'), 1, 3);
    board = addPieceToBoard(board, generatePiece('8', 'red'), 1, 4);
    board = addPieceToBoard(board, generatePiece('10', 'red'), 1, 5);
    return board;
}