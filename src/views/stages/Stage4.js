import React from 'react';
import { Comment } from 'semantic-ui-react'
import player1 from "../../images/player_1.png";
import player2 from "../../images/player_2.png";

import { Board } from "../table/Board";
import { PieceHolder } from '../table/PieceHolder';


export function Stage4(props) {
    return  <div className="stage" id="stage-4">
            <div className="ui five column grid stage-3-grid">
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
                </div>
                <div className="column eight wide">
                    <h1 className="ui header centered">Elenség köre</h1>
                    <Board></Board>
                </div>
                <div className="column four wide">
                    <h1 className="ui header centered medium">Elesett katonák</h1>
                    <PieceHolder></PieceHolder>
                </div>
            </div>
        </div>;
}