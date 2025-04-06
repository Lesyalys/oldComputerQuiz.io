import {state,elements} from'./const.js';
import { updateScoreBoard } from './updateScoreBoard.js';

export function resetGame() {
    state.teams.forEach(team => {
        team.points = 0;
    });
    state.usedQuestions = [];
    state.gameStarted = false;
    
    document.getElementById('winnerModal').style.display = 'none';
    document.querySelector('.setup').style.display = 'block';
    elements.gameBoard.style.display = 'none';
    
    updateScoreBoard();
}