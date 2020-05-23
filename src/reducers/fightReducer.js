import {generateFightObject, startFight, stopFight} from "../functions/fightFunctions";

const starter = generateFightObject();

export const fightReducer = (fight = starter, action) => {
    switch (action.type) {

        case 'FIGHT_ON':
            return startFight(fight, action.attacker, action.attacked);
        case 'FIGHT_OFF':
            return stopFight(fight);

        default:
            return fight;
    }
}