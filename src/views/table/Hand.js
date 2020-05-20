import React from 'react';

import { Piece } from "./Piece";
import { useSelector } from 'react-redux';


export function Hand(props) {
    const hand = useSelector(state => state.hand);
    const pieces = [];
    for (let i = 0; i < hand.length; i++) {
        pieces.push(<Piece place='hand' color={hand[i].color} type={hand[i].type} key={`P${i}`} id={i} dragable></Piece>);
    }
    
    return <div className="game-board-wrapper stickup">
            <div className="slots-wrapper"> 
                {pieces}               
            </div>
        </div>;
}