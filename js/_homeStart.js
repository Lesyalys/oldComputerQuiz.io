import {addTeamInput} from './addTeamInput.js';
import {delTeamInput} from './delTeamInput.js'
import { startGame } from './startGame.js';
import { showCorrectAnswer } from './showCorrectAnswer.js';
import { addPointsToTeam } from './addPointsToTeam.js';
import { resetGame } from './resetGame.js';
import { closeModal } from './closeModal.js';
// import {darkmode}
import {backgroundImages,questionsData,state,elements} from'./const.js';

function init() {
    addTeamInput();
    
    elements.addTeam.addEventListener('click', addTeamInput);
    elements.removeTeam.addEventListener('click', delTeamInput);
    elements.startGame.addEventListener('click', startGame);
    elements.showAnswer.addEventListener('click', showCorrectAnswer);
    elements.addPoints.addEventListener('click', addPointsToTeam);
    elements.closeModal.addEventListener('click', closeModal);
    elements.restartGame.addEventListener('click', resetGame);
    // elements.logoNVSU.addEventListener('click', darkmode)
}


elements.closeModal.addEventListener('click', () => {
    state.questionClosedManually = true;
    closeModal();
});

window.onload = init;