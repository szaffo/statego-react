import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useDrag } from 'react-dnd'
import {generatePiece} from "../../functions/boardFunctions";
import {movePiece, movePieceFormHandToBoard, movePieceFromBoardToHand, selectPiece} from "../../actions/piecesActions";
import {playerComes} from "../../functions/roundFunctions";

export function Piece(props) {
    const dndAllowed = props.dndAllowed || false;
    const dispatch = useDispatch();
    const round = useSelector(state => state.round);

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
                const dropRes = monitor.getDropResult();
                const piece = generatePiece(item.piece, item.color);

                if (item.from === 'hand') {
                    if (dropRes.targetType === 'cell')
                        dispatch(movePieceFormHandToBoard(piece, dropRes.row, dropRes.col));
                } else if (item.from === 'board') {
                    const from = {
                        row: item.row,
                        col: item.col
                    };

                    if (dropRes.targetType === 'cell') {
                        dispatch(movePiece(from, dropRes, true));
                    } else {
                        dispatch(movePieceFromBoardToHand(piece, item.row, item.col));
                    }

                }
            }
        },
        
        canDrag: () => { return ((dndAllowed) && (itemData.color === round.thisPlayerColor)) } //&& (itemData.from === 'hand')) }
    });

    function click(event, data) {
        // Move piece from board to the hand during setup
        if ((data.from === 'board') && dndAllowed) {
            if (round.thisPlayerColor === data.color) {
                dispatch(movePieceFromBoardToHand(generatePiece(data.piece, data.color), data.row, data.col));
            }
            return;
        }

        // Select piece during game
        if ((data.from === 'board') && (['1', '2', '3', '4', '6', '8', '10'].includes(data.piece)) && (playerComes(round))) {
            dispatch(selectPiece(props.row, props.col));
        }
    }
    
    const opacity = (collectedProps.isDragging)? 0.4 : 1;

    return <div onClick={(e) => click(e, itemData)} ref={drag} className="piece" id={props.id} data-color={props.color} data-type={props.type} style={{'opacity': opacity}}/>;
}
