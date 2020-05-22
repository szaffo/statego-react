import React from 'react';
import player1 from "../../images/player_1.png";
import player2 from "../../images/player_2.png";
import {useSelector} from 'react-redux';
import cn from 'classnames';

export function PlayerList() {
    const round = useSelector(state => state.round);
    const classes1 = cn('item', {'active': round.now === round.player_1});
    const classes2 = cn('item', {'active': round.now === round.player_2});

    return <div className="ui middle huge aligned list custom">
                <div className={classes1}>
                    <img alt='játékos kép' className="ui avatar image" src={player1}/>
                        <div className="content">
                            <div className="header">{round.player_1}</div>
                        </div>
                </div>

                <div className={classes2}>
                    <img alt='játékos kép' className="ui avatar image" src={player2}/>
                        <div className="content">
                            <div className="header">{round.player_2}</div>
                        </div>
                </div>

            </div>
    }