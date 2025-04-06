import {state,elements} from'./const.js';
import { addPointsToTeam } from './addPointsToTeam.js';

export function showCorrectAnswer() {
    clearInterval(state.timer);
    elements.correctAnswer.style.display = 'block';
    elements.showAnswer.classList.add('disabled');
    elements.showAnswer.removeEventListener('click', showCorrectAnswer);
    
    // Если время не вышло, оставляем возможность начислить баллы
    if (!state.timerExpired) {
        elements.addPoints.classList.remove('disabled');
        elements.addPoints.addEventListener('click', addPointsToTeam);
    }
}