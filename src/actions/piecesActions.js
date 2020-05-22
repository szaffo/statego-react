export function movePieceFormHandToBoard(piece, row, col) {
    return {
        type: 'PIECE_HAND_TO_BOARD',
        piece,
        row,
        col
    }
}

export function movePieceFromBoardToHand(piece, row, col) {
    return {
        type: 'PIECE_BOARD_TO_HAND',
        piece,
        row,
        col
    }
}