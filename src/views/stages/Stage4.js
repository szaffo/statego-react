import React from 'react';
import {Button} from 'semantic-ui-react'

import { Board } from "../board/Board";
import { Hand } from '../board/Hand';
import {useDispatch, useSelector} from 'react-redux';
import {toggleRound} from "../../actions/roundFunctions";
import {PlayerList} from "../players/playerList";


export function Stage4() {

    const round = useSelector(state => state.round);
    const roundText = (round.now === round.player_1)? 'A Te köröd' : 'Az ellenség köre';
    const dispatch = useDispatch();


    return  <div className="stage" id="stage-4">
            <div className="ui five column grid stage-3-grid">
                <div className="column four wide center aligned">
                    <PlayerList/>
                    <Button positive onClick={() => {dispatch(toggleRound())}}>Toggle round</Button>
                </div>
                <div className="column eight wide">
                    <h1 className="ui header centered">{roundText}</h1>
                    <Board/>
                </div>
                <div className="column four wide">
                    <h1 className="ui header centered medium">Elesett katonák</h1>
                    <Hand/>
                </div>
            </div>
        </div>;
}