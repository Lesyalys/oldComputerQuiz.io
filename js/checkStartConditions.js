import {state,elements} from'./const.js';

export function checkStartConditions() {
    const canStart = state.teams.length >= 2 && 
                     state.teams.every(team => team.name.length > 0);
    elements.startGame.disabled = !canStart;
}