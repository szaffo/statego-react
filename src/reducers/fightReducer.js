import {generateFightObject, startFight, stopFight, victory} from "../functions/fightFunctions";

const starter = generateFightObject();

export const fightReducer = (fight = starter, action) => {
    switch (action.type) {

        case 'FIGHT_START':
            return startFight(fight, action.attacker, action.attacked);

        case 'FIGHT_END':
            return stopFight(fight);

        case 'VICTORY':
            return victory(fight, action.attacker);

        case 'RESET':
            return starter;

        default:
            return fight;
    }
}