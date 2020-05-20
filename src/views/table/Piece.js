import React from 'react';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd'
import { removePieceFromHand, addPieceToHand } from '../../actions/handActions';
import { removePieceFromBoard } from '../../actions/boardActions';

export function Piece(props) {
    const dragable = props.dragable || false;
    const dispatch = useDispatch();

    const itemData = {
        type: 'Piece',
        id: props.id,
        piece: props.type,
        color: props.color,
        from: props.place, 
        row: props.row,
        col: props.col
    };
    
    const [collectedProps, drag] = useDrag({
        item: itemData,
        
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging()
            }
        },
       
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                if (item.from === 'hand') {
                    const piece = {
                        type: item.piece,
                        color: item.color
                    }
                    dispatch(removePieceFromHand(piece));
                }
            }
        },
        
        canDrag: (monitor) => { return dragable }
    });

    function click(event, data) {
        if (data.from === 'board') {
            console.log(data);
            dispatch(removePieceFromBoard(data.row, data.col));
            dispatch(addPieceToHand({
                type: data.piece,
                color: data.color
            }))
        }
    }
    
    const opacity = (collectedProps.isDragging)? 0 : 1;

    return <div onClick={(e) => click(e, itemData)} ref={drag} className="piece" id={props.id} data-color={props.color} data-type={props.type} style={{'opacity': opacity}}></div>;
}
