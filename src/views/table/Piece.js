/* eslint-disable no-restricted-globals */
import React from 'react';

export function Piece(props) {
    return <div className="piece" id={props.id} data-color={props.color}
        data-piece={props.type}>
            
        </div>;
}
