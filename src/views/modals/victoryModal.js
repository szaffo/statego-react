import React from 'react'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {Piece} from "../board/Piece";
import {getWinnerColor, hasWon} from "../../functions/fightFunctions";
import {getPlayerName} from "../../functions/roundFunctions";
import {reset as resetRound} from "../../actions/roundActions";

export function VictoryModal() {
    const fight = useSelector(state => state.fight);
    const round = useSelector(state => state.round);
    const dispatch = useDispatch();

    let children;
    if (hasWon(fight)) {
        children = [
            <Piece key='attacker' place='modal' color={fight.attacker.color} type={fight.attacker.type}/>,
            <Icon key='icon' size='huge' name='arrow right'/>,
            <Piece key='attacked' place='modal' color={fight.attacked.color} type={fight.attacked.type}/>
        ]
    }

    const reset = () => {
        dispatch(resetRound());
    }

    return <Modal open={hasWon(fight)} basic size='small'>
        <Header size='huge' as='h2' icon textAlign='center'>
            <Icon name='shield alternate' circular/>
            <Header.Content>{getPlayerName(round, getWinnerColor(fight))} győzőtt!</Header.Content>
        </Header>
        <Modal.Content>
            <div className='fight-modal-container'>
                {children}
            </div>
            <div className='fight-modal-container'>
                <Button onClick={(e) => reset(e)} basic positive>Főoldal</Button>
            </div>
        </Modal.Content>
    </Modal>;
}