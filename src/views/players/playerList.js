import React from 'react';
import player1 from "../../images/player_1.png";
import player2 from "../../images/player_2.png";
import {useSelector} from 'react-redux';
import cn from 'classnames';
import {playerComes} from "../../functions/roundFunctions";

export function PlayerList(props) {
    const round = useSelector(state => state.round);
    const mode = (props.mode === 'ready')? 'ready' : 'round';

    let classes1;
    let classes2;
    if (mode === 'ready') {
        classes1 = cn('ui segment custom-segment', {'green inverted': round.playerReady});
        classes2 = cn('ui segment custom-segment', {'green inverted': round.enemyReady});
    } else {
        classes1 = cn('ui segment custom-segment', {'green inverted': playerComes(round)});
        classes2 = cn('ui segment custom-segment', {'green inverted': !playerComes(round)});
    }

    return <div className="ui basic center aligned segment">
                <div className={classes1}>
                    <div className='custom-player'>
                        <img alt='játékos kép' className="ui image" src={(round.thisPlayerIs === 1)? player1 : player2}/>
                        <h1 className="header small">{(round.thisPlayerIs === 1)? round.blue : round.red}</h1>
                    </div>
                </div>

                <div className={classes2}>
                    <div className='custom-player'>
                        <img alt='játékos kép' className="ui image" src={(round.thisPlayerIs !== 1)? player1 : player2}/>
                        <h1 className="header small">{(round.thisPlayerIs === 2)? round.blue : round.red}</h1>
                    </div>
                </div>

            </div>
}