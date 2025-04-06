import {state,elements} from'./const.js';
import { createGameBoard } from './createGameBoard.js';
import {updateScoreBoard} from './updateScoreBoard.js';

export function startGame() {
    state.gameStarted = true;
    document.querySelector('.setup').style.display = 'none';
    elements.gameBoard.style.display = 'block';
    
    // Создаем игровое поле
    createGameBoard();
    
    // Обновляем таблицу счета
    updateScoreBoard();
}