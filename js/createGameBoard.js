import {questionsData,state,elements} from'./const.js';
import { showQuestion } from './showQuestion.js';

export function createGameBoard() {
    elements.categories.innerHTML = '';
    
    questionsData.forEach((category, catIndex) => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'category';
        
        const categoryName = document.createElement('div');
        categoryName.className = 'category-name';
        categoryName.textContent = category.name;
        categoryEl.appendChild(categoryName);
        
        const questionsEl = document.createElement('div');
        questionsEl.className = 'questions';
        
        category.questions.forEach((question, questIndex) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'question';
            questionEl.textContent = question.points;
            questionEl.dataset.category = catIndex;
            questionEl.dataset.question = questIndex;
            
            // Проверяем, использован ли уже этот вопрос
            const isUsed = state.usedQuestions.some(q => 
                q.category === catIndex && q.question === questIndex);
            
            if (isUsed) {
                questionEl.classList.add('used');
            } else {
                questionEl.addEventListener('click', () => showQuestion(catIndex, questIndex));
            }
            
            questionsEl.appendChild(questionEl);
        });
        
        categoryEl.appendChild(questionsEl);
        elements.categories.appendChild(categoryEl);
    });
}