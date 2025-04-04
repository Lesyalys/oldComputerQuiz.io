import {state} from'./const.js';
import { updateScoreBoard } from './updateScoreBoard.js';
import { updateModalScoreBoard } from './updateModalScoreBoard.js';
import { createGameBoard } from './createGameBoard.js';
import { checkGameEnd } from './checkGameEnd.js';
import { closeModal } from './closeModal.js';

export function addPointsToTeam() {
    const selectedTeam = Array.from(document.querySelectorAll('input[name="modal-team"]:checked'))[0];
    
    if (selectedTeam) {
        const teamId = selectedTeam.value;
        const points = state.currentQuestion.points;
        
        // Добавляем баллы
        state.teams[teamId].points += points;
        
        // Помечаем вопрос как использованный
        state.usedQuestions.push({
            category: state.currentQuestion.category,
            question: state.currentQuestion.question
        });
        
        // Обновляем интерфейс
        updateScoreBoard();
        updateModalScoreBoard();
        createGameBoard();
        checkGameEnd();
        // Закрываем модальное окно (без установки флага questionClosedManually)
        closeModal();
    }
}