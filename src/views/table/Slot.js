import React from 'react';
import { useDrop } from 'react-dnd'
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { addPieceToBoard } from '../../actions/boardActions';
import { Piece } from './Piece';


export function Slot(props) {
    const dispatch = useDispatch();
    const board = useSelector(state => state.board);
    const cell = board[props.row][ props.col];
    
    const [collectedProps, drop] = useDrop({
        accept: 'Piece',
        drop: (item, monitor) => {
            let piece = {
                type: item.piece,
                color: item.color
            }
            dispatch(addPieceToBoard(piece, props.row, props.col));
        },
        collect: (monitor) => {
            return {
                hover: monitor.isOver(),
                canDrop: monitor.canDrop()
            }
        },
        canDrop: (item, monitor) => {
            return ((cell === null) && (props.row >= 4));
        }
    })

    const classes = cn('board-slot', { 'canDrop': collectedProps.hover && collectedProps.canDrop }, { 'canNotDrop': collectedProps.hover && !collectedProps.canDrop });
    
    let child = null;
    if (cell !== null) {
        child = <Piece place='board' color={cell.color} type={cell.type} col={props.col} row={props.row}></Piece>
    }   

    return  <div ref={drop} className={classes}> 
                {child}
            </div>;
}
