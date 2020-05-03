import React from 'react';

import { BoardSlot } from "./BoardSlot";

export function Board(props) {
    return <div className="game-board-wrapper">
                <div className="game-board">
                    {[...Array(36).keys()].map((value, index) => {
                        return <BoardSlot key={`BS-${index}`}></BoardSlot>
                    })}
                </div>
            </div>;
}
