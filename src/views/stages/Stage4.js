import React from 'react';
import { Board } from "../board/Board";
import { Hand } from '../board/Hand';
import { useSelector} from 'react-redux';
import {PlayerList} from "../players/playerList";
import {FightModal} from "../modals/fightModal";
import {VictoryModal} from "../modals/victoryModal";
import {playerComes} from "../../functions/roundFunctions";


export function Stage4() {

    const round = useSelector(state => state.round);
    const roundText = (playerComes(round))? 'A Te köröd' : 'Az ellenség köre';


    return  <div className="stage" id="stage-4">
            <div className="ui five column grid stage-3-grid">
                <div className="column four wide center aligned">
                    <PlayerList mode='round'/>
                    <FightModal/>
                    <VictoryModal/>
                </div>
                <div className="column eight wide">
                    <h1 className="ui header centered">{roundText}</h1>
                    <Board/>
                </div>
                <div className="column four wide">
                    <h1 className="ui header centered medium">Legyőzött katonák</h1>
                    <Hand show='enemy' />
                </div>
            </div>
        </div>;
}