import React from 'react';
import { Comment } from 'semantic-ui-react'

import player1 from "../../images/player_1.png";
import player2 from "../../images/player_2.png";

import { Board } from "../board/Board";
import { Hand } from '../board/Hand';
import { ReadyModal } from '../modals/readyModal';
import { useDispatch, useSelector } from 'react-redux';
import { setStageAction } from '../../actions/stageActions';

export function Stage3() {
    const dispatch = useDispatch();
    const hand = useSelector(state => state.pieces.hand);
    const canContinue = (hand.length === 0);

    return <div className="stage" id="stage-3">
        <div className="ui five column grid stage-3-grid stretched">
            <div className="column four wide">
                <div className="ui comments">
                    <h1 className="ui header medium">Játékosok</h1>

                    <Comment>
                        <Comment.Avatar src={player1} />
                        <Comment.Content>
                            <Comment.Author as='a'>Első játékos</Comment.Author>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src={player2} />
                        <Comment.Content>
                            <Comment.Author as='a'>Második játékos</Comment.Author>
                        </Comment.Content>
                    </Comment>
                </div>

                <ReadyModal disabled={canContinue} onOkay={() => {dispatch(setStageAction(4))}}/>

            </div>
            <div className="column eight wide">
                <h1 className="ui header centered">Harctér elrendezése</h1>
                <Board dndAllowed />
            </div>
            <div className="column four wide">
                <h1 className="ui header centered medium">Felhasználható katonák</h1>
                <Hand dndAllowed />
            </div>
        </div>
    </div>;
}