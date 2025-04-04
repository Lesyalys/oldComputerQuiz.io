import {state,elements} from'./const.js';

export function showCorrectAnswer() {
    clearInterval(state.timer);
    elements.correctAnswer.style.display = 'block';
    elements.showAnswer.disabled = true;
    
    // Если время вышло, делаем кнопку "Начислить баллы" неактивной
    elements.addPoints.disabled = state.timerExpired;
    
    // Если время не вышло, оставляем возможность начислить баллы
    if (!state.timerExpired) {
        elements.addPoints.disabled = false;
    }
}