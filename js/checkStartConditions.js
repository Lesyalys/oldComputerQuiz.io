import {state,elements} from'./const.js';
import { startGame } from './startGame.js';

export function checkStartConditions() {
    const canStart = state.teams.length >= 2 && 
                     state.teams.every(team => team.name.length > 0);
    if (!canStart) {
        elements.startGame.classList.add("disabled");
        elements.startGame.removeEventListener("click", startGame);
    } else {
        elements.startGame.classList.remove("disabled");
        elements.startGame.addEventListener('click', startGame);
    }
}