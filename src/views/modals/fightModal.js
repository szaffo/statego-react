import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {fightOff} from "../../actions/fightActions";
import {Piece} from "../board/Piece";

export function FightModal(props) {
    const dispatch = useDispatch();
    const fight = useSelector(state => state.fight);

    if (fight.on) {
        // Timeout calls dispatch, and react may re-render this component
        // To avoid triggering the same action twice, we have to clear out the previous one
        clearTimeout(document.fightTimer);

        document.fightTimer = setTimeout(function() {
            if (!fight.on) return;
            dispatch(fightOff(fight.attacker, fight.attacked));
        }, 3000)
    }

    let children;
    if (fight.on) {
        children = [
            <Piece place='modal' color={fight.attacker.color} type={fight.attacker.type}/>,
            <Icon size='huge' name='arrow right'/>,
            <Piece place='modal' color={fight.attacked.color} type={fight.attacked.type}/>
        ]
    }

    return <Modal trigger={<Button>Basic Modal</Button>} open={fight.on} basic size='medium'>
            <Header size='huge' as='h2' icon textAlign='center'>
                <Icon name='shield alternate' circular />
                <Header.Content>Harc!</Header.Content>
            </Header>
            <Modal.Content>
                <div className='fight-modal-container'>
                    {children}
                </div>
            </Modal.Content>
        </Modal>
}