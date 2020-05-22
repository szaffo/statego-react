import React from 'react';
import { useSelector } from 'react-redux';

import { Slot } from "./Slot";

export function Board(props) {
    const board = useSelector(state => state.pieces.board);
    const dndAllowed = props.dndAllowed || false;
    const slots = [];

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            slots.push(
                <Slot row={row} col={col} key={`BS-row${row}-col${col}`} dndAllowed={dndAllowed}/>
            );
        }
    }

    return <div className="game-board-wrapper">
                <div className="game-board">
                    {slots.map((slot) => {
                        return slot;
                    })}
                </div>
            </div>;
}
