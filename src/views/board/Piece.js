import React from 'react';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd'
import {generatePiece} from "../../functions/boardFunctions";
import {movePieceFormHandToBoard, movePieceFromBoardToHand} from "../../actions/piecesActions";

export function Piece(props) {
    const dndAllowed = props.dndAllowed || false;
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
                    const piece = generatePiece(item.piece, item.color);
                    const dropRes = monitor.getDropResult();
                    // dispatch(removePieceFromHand(piece));

                    dispatch(movePieceFormHandToBoard(piece, dropRes.row, dropRes.col));
                }
            }
        },
        
        canDrag: () => { return ((dndAllowed) && (itemData.from === 'hand')) }
    });

    function click(event, data) {
        if ((data.from === 'board') && dndAllowed) {
            dispatch(movePieceFromBoardToHand(generatePiece(data.piece, data.color), data.row, data.col));
        }
    }
    
    const opacity = (collectedProps.isDragging)? 0 : 1;

    return <div onClick={(e) => click(e, itemData)} ref={drag} className="piece" id={props.id} data-color={props.color} data-type={props.type} style={{'opacity': opacity}}/>;
}
