import {state,elements} from'./const.js';
import { showCorrectAnswer } from './showCorrectAnswer.js';

export function startTimer() {
    state.timeLeft = 60;
    elements.timer.textContent = state.timeLeft;
    state.timerExpired = false; 
    
    if (state.timer) {
        clearInterval(state.timer);
    }
    
    state.timer = setInterval(() => {
        state.timeLeft--;
        elements.timer.textContent = state.timeLeft;
        
        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            state.timerExpired = true; 
            showCorrectAnswer();
        }
    }, 1000);
}