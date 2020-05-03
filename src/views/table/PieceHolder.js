import React from 'react';

import { Piece } from "./Piece";
import { BoardSlot } from './BoardSlot';

export function PieceHolder(props) {
    const pieces = [
        {color: "blue", type: "flag"},
        {color: "blue", type: "bomb"},
        {color: "blue", type: "bomb"},
        {color: "blue", type: "1"},
        {color: "blue", type: "2"},
        {color: "blue", type: "2"},
        {color: "blue", type: "3"},
        {color: "blue", type: "3"},
        {color: "blue", type: "4"},
        {color: "blue", type: "6"},
        {color: "blue", type: "8"},
        {color: "blue", type: "10"}
    ]
    
    
    return <div className="game-board-wrapper stickup">
            <div className="slots-wrapper"> 
                {pieces.map((value, index) => {
                    return <BoardSlot key={`BS${index}`}>
                                <Piece color={value.color} type={value.type} key={`P${index}`}></Piece>
                            </BoardSlot> 
                })}               
            </div>
        </div>;
}