import {deepCopy} from "./generalFunctions";
import {canDefeat} from "./fightFunctions";

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
    if (piece === null) return board;
    let newBoard = deepCopy(board);
    newBoard.data[row][col].piece = piece;
    newBoard.data[row][col].filled = true;
    return newBoard
}

/**
 * Removes the Piece from the Cell. Creates a copy of the Board.
 * @param board
 * @param row
 * @param col
 * @returns {Board}
 */
export function eraseCell(board, row, col) {
    let newBoard = deepCopy(board);
    newBoard.data[row][col].filled = false;
    newBoard.data[row][col].piece = null;
    return newBoard;
}

/**
 * Returns a copy of the Cell that is in the Board at the given position.
 * @param board
 * @param row
 * @param col
 * @returns {Piece}
 */
export function getCellFromBoard(board, row, col) {
    return deepCopy(board.data[row][col]);
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
export function generatePiece(type, color,) {
    return {
        type,
        color,
        selected: false
    }
}

/**
 * Generates a board full of empty cells
 * @param numOfRows How many rows to generate
 * @param numOfCols How many columns to generate
 * @returns Board
 */
export function generateBoard(numOfRows, numOfCols) {
    let board = {
        data: [],
        selected: null,
        activeCells: []
    };
    let row = [];
    for (let i = 0; i < numOfRows; i++) {
        row = [];
        for (let k = 0; k < numOfCols; k++) {
            row.push(generateCell());
        }
        board.data.push(row);
    }
    return board
}

/**
 * Adds a Piece to the Board. Creates a deep copy of that Board, if the Cell changed.
 * @param board
 * @param piece - A generatePiece() generated Piece
 * @param row
 * @param col
 * @returns Board
 */
export function addPieceToBoard(board, piece, row, col) {
    let cell = getCellFromBoard(board, row, col);
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
        rows: board.data.length,
        cols: board.data[0].length
    }
}

/**
 * Returns the Piece from the given Board's Cell.
 * @param board
 * @param row
 * @param col
 * @returns {Piece}
 */
export function getPieceFromBoard(board, row, col) {
    return getPieceFromCell(getCellFromBoard(board, row, col));
}

/**
 * Fills the Board with the enemy's Pieces.
 * It's only for testing purpose.
 * @param board
 * @param color {'red'|'blue'}
 */
export function fillEnemyBoard(board, color) {
    board = addPieceToBoard(board, generatePiece('flag', color), 1, 5);
    board = addPieceToBoard(board, generatePiece('bomb', color), 1, 4);
    board = addPieceToBoard(board, generatePiece('bomb', color), 1, 3);
    board = addPieceToBoard(board, generatePiece('1', color), 1, 2);
    board = addPieceToBoard(board, generatePiece('2', color), 1, 1);
    board = addPieceToBoard(board, generatePiece('2', color), 1, 0);
    board = addPieceToBoard(board, generatePiece('3', color), 0, 5);
    board = addPieceToBoard(board, generatePiece('3', color), 0, 4);
    board = addPieceToBoard(board, generatePiece('4', color), 0, 3);
    board = addPieceToBoard(board, generatePiece('6', color), 0, 2);
    board = addPieceToBoard(board, generatePiece('8', color), 0, 1);
    board = addPieceToBoard(board, generatePiece('10', color), 0, 0);
    return board;
}

/**
 * Fills the Board with the player's Pieces.
 * This function's only reason to exist, is to speed up testing
 * @param board
 * @param color {'red'|'blue'}
 */
export function fillBoard(board, color) {
    board = addPieceToBoard(board, generatePiece('flag', color), 4, 0);
    board = addPieceToBoard(board, generatePiece('bomb', color), 4, 1);
    board = addPieceToBoard(board, generatePiece('bomb', color), 4, 2);
    board = addPieceToBoard(board, generatePiece('1', color), 4, 3);
    board = addPieceToBoard(board, generatePiece('2', color), 4, 4);
    board = addPieceToBoard(board, generatePiece('2', color), 4, 5);
    board = addPieceToBoard(board, generatePiece('3', color), 5, 0);
    board = addPieceToBoard(board, generatePiece('3', color), 5, 1);
    board = addPieceToBoard(board, generatePiece('4', color), 5, 2);
    board = addPieceToBoard(board, generatePiece('6', color), 5, 3);
    board = addPieceToBoard(board, generatePiece('8', color), 5, 4);
    board = addPieceToBoard(board, generatePiece('10', color), 5, 5);
    return board;
}

/**
 * Rotates the board with 180 degrees.
 * It can be used when switching players
 * @param board
 * @returns {Board}
 */
export function rotateBoard(board) {
    let size = getSizeOfBoard(board)
    let newBoard = generateBoard(size.rows, size.cols);

    for (let rowIndex = 0; rowIndex < size.rows; rowIndex++) {
        for (let colIndex = 0; colIndex < size.cols; colIndex++) {
            if (isCellHasPiece(getCellFromBoard(board, rowIndex, colIndex))) {
                newBoard = addPieceToBoard(
                    newBoard,
                    getPieceFromBoard(board, rowIndex, colIndex),
                    Math.abs(rowIndex - size.rows + 1),
                    Math.abs(colIndex - size.cols + 1)
                )
            }
        }
    }

    return newBoard;
}

/**
 * Check if the board has a Piece selected
 * @param board
 */
export function hasBoardSelection(board) {
    return board.selected !== null;
}

/**
 * Returns the selected Piece's coordinates
 * @param board
 * @returns {null | {row: number, col: number}}
 */
export function getSelected(board) {
    return board.selected;
}

/**
 * Handles a click on a Piece
 * @param board
 * @param row
 * @param col
 * @returns {Board}
 */
export function togglePieceSelection(board, row, col) {
    let cell = getCellFromBoard(board, row, col);

    if (!isCellHasPiece(cell)) return board;

    if (hasBoardSelection(board)) {
        const cords = getSelected(board);
        if ((cords.row === row) && (cords.col === col)) {
            board = unSelectPiece(board);
        } else {
            return board; // Has selection, but not the same as the clicked
        }
    }  else {
        board = selectPiece(board, row, col);
    }
    return board;
}

/**
 * Checks if a coordinate is in the table
 * @param board
 * @param row
 * @param col
 * @return boolean
 */
function isInBoard(board, row, col) {
    const size = getSizeOfBoard(board);
    return ((row >= 0) && (col >= 0) && (row < size.rows) && (col < size.cols));
}

/**
 * Determinate if a Cell can be activated
 * @param board
 * @param row
 * @param col
 * @param source - The Piece that wants to move
 * @return {boolean}
 */
function canActivateCell(board, row, col, source) {
    if (!isInBoard(board, row, col)) return false;

    let cell = getCellFromBoard(board, row, col);
    if (isCellHasPiece(cell)) {
        let piece = getPieceFromCell(cell);
        return (piece.color !== source.color);
    } else {
        return true;
    }
}

/**
 * Activates a Cell if it can be activated
 * Gives back the same board!
 * @param board
 * @param row
 * @param col
 * @param source The Piece that wants to move
 * @returns {Board}
 */
function activateCell(board, row, col, source) {
    if (!canActivateCell(board, row, col, source)) return board;
    board.activeCells.push({
        row, col
    })
    return board;
}

/**
 * Selects a Piece and activates that Cells, where the Piece can move
 * @param board
 * @param row
 * @param col
 * @returns {Board}
 */
function selectPiece(board, row, col) {
    if (hasBoardSelection(board)) return board;
    board = deepCopy(board);
    board.selected = {row, col};
    let cell = getCellFromBoard(board, row, col);
    let piece = getPieceFromCell(cell);

    //Handle edge case
    if (['bomb', 'flag'].includes(piece.type)) return board;

    if (piece.type === '2') {
        activateCellsForScout(board, row, col);
    } else {
        // console.log('source', source);
        board = activateCell(board, row-1, col, piece);
        board = activateCell(board, row+1, col, piece);
        board = activateCell(board, row, col-1, piece);
        board = activateCell(board, row, col+1, piece);
    }
    return board;
}

/**
 * Un-selects a Piece and clears the activated Cells
 * @param board
 * @returns {Board}
 */
export function unSelectPiece(board) {
    if (!hasBoardSelection(board)) return board;
    board = deepCopy(board);
    board.selected = null;
    board.activeCells = [];

    return board;
}

/**
 * Check if a Cell is active
 * @param board
 * @param row
 * @param col
 * @returns {boolean}
 */
export function isActiveCell(board, row, col) {
    if (!hasBoardSelection(board)) return false;
    let elem;
    for (let i = 0; i < board.activeCells.length; i++) {
        elem = board.activeCells[i];
        if ((elem.row === row) && (elem.col === col)) return true
    }
    return false;
}

/**
 * Check if a Cell is selected
 * @param board
 * @param row
 * @param col
 * @returns {boolean}
 */
export function isSelected(board, row, col) {
    if (!hasBoardSelection(board)) return false;
    let selected = board.selected;
    return ((selected.row === row) && (selected.col === col));
}

/**
 * Activates every Cell where the scout (piece.type === 2) can be moved.
 * @param board
 * @param row
 * @param col
 * @returns {Board}
 */
function activateCellsForScout(board, row, col) {
    const cell = getCellFromBoard(board, row, col);
    const piece = getPieceFromCell(cell);

    function scout(board, row, col, direction, source) {
        row = row + direction.row;
        col = col + direction.col;

        if (!isInBoard(board, row , col)) return board;
        const canActivate = canActivateCell(board, row, col, source);
        if (!canActivate) return  board;

        board = activateCell(board, row, col, source);
        if (isCellHasPiece(getCellFromBoard(board, row, col))) return board;

        return scout(board, row, col, direction, source);
    }

    board = scout(board, row, col, {row: -1, col: 0}, piece);
    board = scout(board, row, col, {row: +1, col: 0}, piece);
    board = scout(board, row, col, {row: 0, col: +1}, piece);
    board = scout(board, row, col, {row: 0, col: -1}, piece);

    return board;
}

/**
 * Moves a Piece to a free cell
 * @param board
 * @param from - {row: number, col:number}
 * @param to - {row: number, col:number}
 * @returns {Board}
 */
export function movePiece(board, from, to) {
    board = deepCopy(board);
    const piece = getPieceFromBoard(board, from.row, from.col);
    const targetCell = getCellFromBoard(board, to.row, to.col);

    if (isCellHasPiece(targetCell)) {
        return board;
    }

    board = removePieceFromBoard(board, from.row, from.col);
    board = addPieceToBoard(board, piece, to.row, to.col);

    return board;
}

/**
 * Removes the defeated Pieces from the board
 * @param board
 * @param attacker
 * @param attacked
 * @returns {Board}
 */
export function fightEnd(board, attacker, attacked) {
    board = unSelectPiece(board);
    if (canDefeat(attacked, attacker)) board = removePieceFromBoard(board, attacker.row, attacker.col);
    if (canDefeat(attacker, attacked)) {
        board = removePieceFromBoard(board, attacked.row, attacked.col);
        board = movePiece(
            board,
            {row: attacker.row, col: attacker.col},
            {row: attacked.row, col: attacked.col}
        );
    }
    return board;
}

/**
 * Adds a blank piece to the board in the enemy's area
 * @param board
 * @param row
 * @param col
 * @param piece
 * @returns {Board}
 */
export function addEnemyPiece(board, row, col, piece) {
    const bSize = getSizeOfBoard(board);
    return addPieceToBoard(board, piece, Math.abs(row - bSize.rows + 1), Math.abs(col - bSize.cols + 1));
}

/**
 * Removes a piece from the enemy's area
 * @param board
 * @param row
 * @param col
 * @returns {*}
 */
export function removeEnemyPieceFromBoard(board, row, col) {
    const bSize = getSizeOfBoard(board);
    return removePieceFromBoard(board, Math.abs(row - bSize.rows + 1), Math.abs(col - bSize.cols + 1));
}

/**
 * Moves an Enemy Piece to a free cell
 * @param board
 * @param from - {row: number, col:number}
 * @param to - {row: number, col:number}
 * @returns {Board}
 */
export function moveEnemyPiece(board, from, to) {
    const bSize = getSizeOfBoard(board);
    from = {
        row: Math.abs(from.row - bSize.rows + 1),
        col: Math.abs(from.col - bSize.cols + 1)
    };

    to = {
        row: Math.abs(to.row - bSize.rows + 1),
        col: Math.abs(to.col - bSize.cols + 1)
    };

    return movePiece(board, from, to);
}