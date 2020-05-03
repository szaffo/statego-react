import React from 'react';
import { Comment, Button, Modal} from 'semantic-ui-react'

import player1 from "../../images/player_1.png";
import player2 from "../../images/player_2.png";

import { Board } from "../table/Board";
import { PieceHolder } from '../table/PieceHolder';

export function Stage3(props) {
    return <div className="stage" id="stage-3">
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

                <Modal
                    basic
                    size='tiny'
                    trigger={<div className="ready-button"><Button size="huge" positive>Kész</Button></div> }
                    header='Biztos hogy kész vagy?'
                    content='Az elfogadás után bármikor elkezdődhet a játék, amint az ellefél is kész. Ezután már nem tudod módosítani a bábuid helyzetét.'
                    actions={[{ key: 'cancel', content: 'Nem', positive: false, inverted: true, icon: 'remove', color: 'red' }
                            , { key: 'done', content: 'Igen', positive: true, inverted: true, icon: 'checkmark', color:'green' }]}
                    onActionClick={() => {document.stager.setActive(4)}}
                />


            </div>
            <div className="column eight wide">
                <h1 className="ui header centered">Csatamező elrendezése</h1>
                <Board></Board>
            </div>
            <div className="column four wide">
                <h1 className="ui header centered medium">Felhasználható katonák</h1>
                <PieceHolder></PieceHolder>
            </div>
        </div>
    </div>;
}