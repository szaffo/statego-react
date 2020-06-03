import {generateHand, removePieceFromHand, addPieceToHand, eraseHand, fightEnd} from '../functions/handFunctions';

const starter = generateHand();

export const handReducer = (hand = starter, action) => {
    switch (action.type) {
        case 'PIECE_HAND_TO_BOARD':
            return removePieceFromHand(hand, action.piece);

        case 'PIECE_BOARD_TO_HAND':
            return addPieceToHand(hand, action.piece);

        case 'FILL':
            return eraseHand();

        case 'FIGHT_END':
            return fightEnd(hand, action.attacker, action.attacked);

        case 'RESET':
            return generateHand(action.color);

        case 'ROOM_IS_FULL':
            return generateHand((action.playerNumber === 1)? 'blue' : 'red');

        default:
            return hand;
    }
}
