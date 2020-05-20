import { generateHand, removePieceFromHand, addPieceToHand} from '../js/handFunctions';

const starter = generateHand();

export const handReducer = (hand = starter, action) => {
    switch (action.type) {
        case 'REMOVE_PIECE_FROM_HAND':
            return removePieceFromHand(hand, action.piece);
        case 'ADD_PIECE_TO_HAND':
            return addPieceToHand(hand, action.piece);
        default:
            return hand;
    }
}
