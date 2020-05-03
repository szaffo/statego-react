import React from 'react';

export function BoardSlot(props) {
    // eslint-disable-next-line no-restricted-globals
    return <div className="board-slot">
        {props.children}
    </div>;
}
