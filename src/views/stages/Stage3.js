import React from 'react';
import { Board } from "../board/Board";
import { Hand } from '../board/Hand';
import { ReadyModal } from '../modals/readyModal';
import { useDispatch, useSelector } from 'react-redux';
import {PlayerList} from "../players/playerList";
import {togglePayerReady} from "../../actions/roundActions";

export function Stage3() {
    const dispatch = useDispatch();
    const hand = useSelector(state => state.pieces.hand);
    const round = useSelector(state => state.round);
    const canContinue = (hand.length === 0);

    return <div className="stage" id="stage-3">
        <div className="ui five column grid stage-3-grid stretched">
            <div className="column four wide">
                <PlayerList mode={'ready'}/>

                <ReadyModal disabled={!canContinue || round.playerReady} onOkay={() => {dispatch(togglePayerReady())}}/>
                {/*<Button color={"purple"} basic onClick={() => dispatch({type: 'FILL', color: round.thisPlayerColor})}>FILL MY BOARD</Button>*/}

            </div>
            <div className="column eight wide">
                <h1 className="ui header centered">Harctér elrendezése</h1>
                <Board dndAllowed />
            </div>
            <div className="column four wide">
                <h1 className="ui header centered medium">Felhasználható katonák</h1>
                <Hand show='self' dndAllowed />
            </div>
        </div>
    </div>;
}