import React from 'react';
import { useSelector } from 'react-redux';
import { getSizeOfBoard } from '../../functions/boardFunctions';

import { Cell } from "./Cell";

export function Board(props) {
    const board = useSelector(state => state.pieces.board);
    const dndAllowed = props.dndAllowed || false;
    const slots = [];
    const boardSize = getSizeOfBoard(board);

    for (let row = 0; row < boardSize.rows; row++) {
        for (let col = 0; col < boardSize.cols; col++) {
            slots.push(
                <Cell row={row} col={col} key={`BS-row${row}-col${col}`} dndAllowed={dndAllowed}/>
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
