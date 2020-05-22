export const HAND_SIZE = 12;

/**
 * Generates a Hand full of Pieces.
 * @returns {({color: string, type: string}|{color: string, type: string}|{color: string, type: string}|{color: string, type: string})[]}
 */
export function generateHand() {
    return [
        { type: 'flag', color: 'blue' },
        { type: 'bomb', color: 'blue' },
        { type: 'bomb', color: 'blue' },
        { type: '1', color: 'blue' },
        { type: '2', color: 'blue' },
        { type: '2', color: 'blue' },
        { type: '3', color: 'blue' },
        { type: '3', color: 'blue' },
        { type: '4', color: 'blue' },
        { type: '6', color: 'blue' },
        { type: '8', color: 'blue' },
        { type: '10', color: 'blue' },
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
    return JSON.parse(JSON.stringify(hand));
}