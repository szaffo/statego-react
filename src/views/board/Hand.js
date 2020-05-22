import React from 'react';

import { Piece } from "./Piece";
import { useSelector } from 'react-redux';


export function Hand(props) {
    const hand = useSelector(state => state.pieces.hand);
    const pieces = [];
    const dndAllowed = props.dndAllowed || false;

    for (let i = 0; i < hand.length; i++) {
        pieces.push(<Piece dndAllowed={dndAllowed} place='hand' color={hand[i].color} type={hand[i].type} key={`P${i}`} id={i} dragable/>);
    }
    
    return <div className="game-board-wrapper stickup">
            <div className="slots-wrapper"> 
                {pieces}               
            </div>
        </div>;
}