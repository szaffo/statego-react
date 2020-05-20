export function addPieceToBoard(piece, row, col) {
    return {
        type: 'ADD_TO_BOARD',
        piece: piece,
        row: row,
        col: col
    }
}

export function removePieceFromBoard(row, col) {
    return {
        type: 'REMOVE_FROM_BOARD',
        row, 
        col
    }
}