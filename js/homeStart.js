import {addTeamInput} from './addTeamInput.js';
import { showCorrectAnswer } from './showCorrectAnswer.js';
import { addPointsToTeam } from './addPointsToTeam.js';
import { resetGame } from './resetGame.js';
import { closeModal } from './closeModal.js';
import {state,elements} from'./const.js';
import { darckShem } from './darckShem.js';


function init() {
    // Добавляем первое поле для команды по умолчанию
    addTeamInput();
    
    // Слушатели событий
    elements.addTeam.addEventListener('click', addTeamInput);
    elements.showAnswer.addEventListener('click', showCorrectAnswer);
    elements.addPoints.addEventListener('click', addPointsToTeam);
    elements.closeModal.addEventListener('click', closeModal);
    elements.restartGame.addEventListener('click',resetGame);
    elements.darckShem.addEventListener('click',darckShem);
}



elements.closeModal.addEventListener('click', () => {
    state.questionClosedManually = true;
    closeModal();
});

window.onload = init;