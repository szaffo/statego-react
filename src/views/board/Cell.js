import React from 'react';
import { useDrop } from 'react-dnd'
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Piece } from './Piece';
import {
    getCellFromBoard,
    getPieceFromCell,
    isActiveCell,
    isCellHasPiece,
    isSelected
} from "../../functions/boardFunctions";


export function Cell(props) {
    const dndAllowed = props.dndAllowed || false;
    const board = useSelector(state => state.pieces.board);
    const round = useSelector(state => state.round);
    const cell = getCellFromBoard(board, props.row, props.col);
    
    const [collectedProps, drop] = useDrop({
        accept: 'Piece',
        drop: () => {
            return {
                col: props.col,
                row: props.row
            }
        },
        collect: (monitor) => {
            return {
                hover: monitor.isOver(),
                canDrop: monitor.canDrop()
            }
        },
        canDrop: () => {
            return ((!isCellHasPiece(cell)) && (props.row >= 4) && dndAllowed);
        }
    })

    const classes = cn(
        'board-slot',
        { 'active': collectedProps.hover && collectedProps.canDrop },
        { 'active': isActiveCell(board, props.row, props.col) },
        { 'active': isSelected(board, props.row, props.col) },
        { 'disabled': collectedProps.hover && !collectedProps.canDrop }
    );
    
    let child = null;
    if (isCellHasPiece(cell)) {
        let piece = getPieceFromCell(cell);
        let type = (piece.color === round.now)? piece.type : 'blank'
        child = <Piece dndAllowed={dndAllowed} place='board' color={piece.color} type={type} col={props.col} row={props.row}/>
    }   

    return  <div ref={drop} className={classes}> 
                {child}
            </div>;
}
