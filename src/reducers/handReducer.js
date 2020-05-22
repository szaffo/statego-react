import {generateHand, removePieceFromHand, addPieceToHand, eraseHand} from '../functions/handFunctions';

const starter = generateHand();

export const handReducer = (hand = starter, action) => {
    switch (action.type) {
        case 'PIECE_HAND_TO_BOARD':
            return removePieceFromHand(hand, action.piece);

        case 'PIECE_BOARD_TO_HAND':
            return addPieceToHand(hand, action.piece);

        case 'FILL':
            return eraseHand();

        default:
            return hand;
    }
}
