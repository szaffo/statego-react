export function removePieceFromHand(piece) {
    return {
        type: 'REMOVE_PIECE_FROM_HAND',
        piece
    }
}

export function addPieceToHand(piece) {
    return {
        type: 'ADD_PIECE_TO_HAND',
        piece
    }
}