import React from 'react'
import {Header, Icon, Modal} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {fightEnd, victory} from "../../actions/fightActions";
import {Piece} from "../board/Piece";
import {isFightStarted} from "../../functions/fightFunctions";

export function FightModal(props) {
    const dispatch = useDispatch();
    const fight = useSelector(state => state.fight);

    if (fight.on) {
        // Timeout calls dispatch, and react may re-render this component
        // To avoid triggering the same action twice, we have to clear out the previous one
        clearTimeout(document.fightTimer);

        document.fightTimer = setTimeout(function () {
            if (!fight.on) return;
            if (fight.attacked.type === 'flag') {
                dispatch(victory(fight.attacker));
            } else {
                dispatch(fightEnd(fight.attacker, fight.attacked));
            }
        }, 3000)
    }

    let children;
    if (isFightStarted(fight)) {
        children = [
            <Piece key='attacker' place='modal' color={fight.attacker.color} type={fight.attacker.type}/>,
            <Icon key='icon' size='huge' name='arrow right'/>,
            <Piece key='attacked' place='modal' color={fight.attacked.color} type={fight.attacked.type}/>
        ]
    }

    return <Modal open={isFightStarted(fight)} basic size='medium'>
        <Header size='huge' as='h2' icon textAlign='center'>
            <Icon name='shield alternate' circular/>
            <Header.Content>Harc!</Header.Content>
        </Header>
        <Modal.Content>
            <div className='fight-modal-container'>
                {children}
            </div>
        </Modal.Content>
    </Modal>;
}