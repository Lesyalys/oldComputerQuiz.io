
import {questionsData,state} from'./const.js';
import { showWinner } from './showWinner.js';

export function checkGameEnd() {
   // Проверяем, остались ли неиспользованные вопросы
   const totalQuestions = questionsData.reduce((sum, category) => sum + category.questions.length, 0);
   if (state.usedQuestions.length === totalQuestions) {
       showWinner();
   }
}