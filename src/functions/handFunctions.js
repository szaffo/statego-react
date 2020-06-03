import {deepCopy} from "./generalFunctions";
import {canDefeat} from "./fightFunctions";

export const HAND_SIZE = 12;

/**
 * Generates a Hand full of Pieces.
 * @returns {({color: string, type: string}|{color: string, type: string}|{color: string, type: string}|{color: string, type: string})[]}
 */
export function generateHand(color) {
    return [
        { type: 'flag', color: color },
        { type: 'bomb', color: color },
        { type: 'bomb', color: color },
        { type: '1', color: color },
        { type: '2', color: color },
        { type: '2', color: color },
        { type: '3', color: color },
        { type: '3', color: color },
        { type: '4', color: color },
        { type: '6', color: color },
        { type: '8', color: color },
        { type: '10', color: color },
    ];
}

/**
 * Removes the specified Piece from the Hand by generating
 * a new one without the Piece
 * @param hand
 * @param piece
 * @returns Hand
 */
export function removePieceFromHand(hand, piece) {
    let handNew = [];
    let wasRemove = false;
    for (let i = 0; i < hand.length; i++) {
        const p = hand[i];
        
        if ((p.type === piece.type) && (p.color === piece.color) && (!wasRemove)) {
            wasRemove = true;
            continue;
        }
        handNew.push(p);
    }
    return handNew;
}

/**
 * Add a Piece to the Hand. Cretes a new Hand.
 * @param hand
 * @param piece
 * @returns Hand
 */
export function addPieceToHand(hand, piece) {
    hand.push(piece);
    return deepCopy(hand);
}

/**
 * This function erases the Hand.
 * It's only for speed up testing
 */
export function eraseHand() {
    return [];
}

/**
 * Adds the defeated Pieces to the hand
 * @param hand
 * @param attacker
 * @param attacked
 * @returns {Hand}
 */
export function fightEnd(hand, attacker, attacked) {
    if (canDefeat(attacker, attacked)) hand =  addPieceToHand(hand, attacked);
    if (canDefeat(attacked, attacker)) hand =  addPieceToHand(hand, attacker);
    return hand;
}