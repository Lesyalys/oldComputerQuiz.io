import {state,elements} from'./const.js';
import { createGameBoard } from './createGameBoard.js';
import { checkGameEnd } from './checkGameEnd.js';

export function closeModal() {
    clearInterval(state.timer);
    elements.questionModal.style.display = 'none';
    
    // Если окно закрыто без начисления баллов (вручную или по таймеру)
    if ((state.questionClosedManually || state.timerExpired) && 
        !state.usedQuestions.some(q => 
            q.category === state.currentQuestion?.category && 
            q.question === state.currentQuestion?.question)) {
        
        // Помечаем вопрос как использованный без начисления баллов
        state.usedQuestions.push({
            category: state.currentQuestion.category,
            question: state.currentQuestion.question
        });
        
        // Обновляем игровое поле
        createGameBoard();
        checkGameEnd();
    }
    
    // Сбрасываем текущий вопрос
    state.currentQuestion = null;
}

elements.closeModal.addEventListener('click', () => {
    state.questionClosedManually = true;
    closeModal();
});