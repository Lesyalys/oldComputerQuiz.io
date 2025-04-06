import {addTeamInput} from './addTeamInput.js';
import { showCorrectAnswer } from './showCorrectAnswer.js';
import { addPointsToTeam } from './addPointsToTeam.js';
import { resetGame } from './resetGame.js';
import { closeModal } from './closeModal.js';
import {state,elements} from'./const.js';

function init() {
    // Добавляем первое поле для команды по умолчанию
    addTeamInput();
    
    // Слушатели событий
    elements.addTeam.addEventListener('click', addTeamInput);
    elements.showAnswer.addEventListener('click', showCorrectAnswer);
    elements.addPoints.addEventListener('click', addPointsToTeam);
    elements.closeModal.addEventListener('click', closeModal);
    document.getElementById('restartGame').addEventListener('click', resetGame);
}



elements.closeModal.addEventListener('click', () => {
    state.questionClosedManually = true;
    closeModal();
});

window.onload = init;