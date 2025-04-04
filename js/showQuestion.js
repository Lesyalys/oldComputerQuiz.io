import {questionsData,state,elements} from'./const.js';
import { startTimer } from "./startTimer.js";
import { updateModalScoreBoard } from "./updateModalScoreBoard.js";
import { backgroundImages } from './const.js';

export function showQuestion(categoryId, questionId) {
     // Проверяем, не использован ли уже вопрос
     const isUsed = state.usedQuestions.some(q => 
        q.category === categoryId && q.question === questionId);
    
    if (isUsed) return;
    
    // Получаем вопрос
    const question = questionsData[categoryId].questions[questionId];
    state.currentQuestion = {
        category: categoryId,
        question: questionId,
        ...question
    };
    
    // Показываем модальное окно
    const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    document.querySelector('.modal-content').style.backgroundImage = randomBg;
    
    // Показываем модальное окно
    elements.modalQuestionText.textContent = question.text;
    elements.correctAnswer.textContent = question.answer;
    elements.correctAnswer.style.display = 'none';
    elements.questionModal.style.display = 'flex';
    
    // Запускаем таймер
    startTimer();
    
    // Обновляем кнопки
    elements.showAnswer.disabled = false;
    elements.addPoints.disabled = true;
    
    // Обновляем таблицу команд в модальном окне
    updateModalScoreBoard();

    state.timerExpired = false;
    state.questionClosedManually = false;
}