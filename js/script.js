// Данные вопросов (5 категорий по 5 вопросов)
const questionsData = [
    {
        name: "История",
        questions: [
            { text: "В каком году началась Вторая мировая война?", answer: "1939", points: 100 },
            { text: "Кто был первым президентом США?", answer: "Джордж Вашингтон", points: 200 },
            { text: "Как называлась столица Византийской империи?", answer: "Константинополь", points: 300 },
            { text: "Кто написал 'Капитал'?", answer: "Карл Маркс", points: 400 },
            { text: "В каком году человек впервые ступил на Луну?", answer: "1969", points: 500 }
        ]
    },
    {
        name: "Наука",
        questions: [
            { text: "Какой химический элемент обозначается как 'O'?", answer: "Кислород", points: 100 },
            { text: "Кто открыл закон всемирного тяготения?", answer: "Исаак Ньютон", points: 200 },
            { text: "Как называется самая большая планета Солнечной системы?", answer: "Юпитер", points: 300 },
            { text: "Какой газ составляет около 78% атмосферы Земли?", answer: "Азот", points: 400 },
            { text: "Кто разработал теорию относительности?", answer: "Альберт Эйнштейн", points: 500 }
        ]
    },
    {
        name: "Искусство",
        questions: [
            { text: "Кто написал картину 'Мона Лиза'?", answer: "Леонардо да Винчи", points: 100 },
            { text: "Какой композитор написал 'Лунную сонату'?", answer: "Людвиг ван Бетховен", points: 200 },
            { text: "В каком городе находится музей Прадо?", answer: "Мадрид", points: 300 },
            { text: "Кто автор романа 'Война и мир'?", answer: "Лев Толстой", points: 400 },
            { text: "Какой художник отрезал себе ухо?", answer: "Винсент ван Гог", points: 500 }
        ]
    },
    {
        name: "Спорт",
        questions: [
            { text: "В каком виде спорта известен Лионель Месси?", answer: "Футбол", points: 100 },
            { text: "Сколько колец на олимпийском флаге?", answer: "5", points: 200 },
            { text: "Какая страна выиграла ЧМ по футболу в 2018 году?", answer: "Франция", points: 300 },
            { text: "Кто holds the record for most Grand Slam titles in tennis?", answer: "Новак Джокович", points: 400 },
            { text: "В каком году проходили Олимпийские игры в Москве?", answer: "1980", points: 500 }
        ]
    },
    {
        name: "География",
        questions: [
            { text: "Какая самая длинная река в мире?", answer: "Нил", points: 100 },
            { text: "В какой стране находится Эйфелева башня?", answer: "Франция", points: 200 },
            { text: "Какой океан самый большой по площади?", answer: "Тихий", points: 300 },
            { text: "Какая столица Австралии?", answer: "Канберра", points: 400 },
            { text: "Сколько континентов на Земле?", answer: "7", points: 500 }
        ]
    }
];

// Состояние игры
const state = {
    teams: [],
    usedQuestions: [], // Массив использованных вопросов (категория-вопрос)
    currentQuestion: null,
    timer: null,
    timeLeft: 30,
    gameStarted: false
};

// Элементы DOM
const elements = {
    teamsContainer: document.getElementById('teamsContainer'),
    addTeam: document.getElementById('addTeam'),
    startGame: document.getElementById('startGame'),
    gameBoard: document.getElementById('gameBoard'),
    categories: document.getElementById('categories'),
    teamsScore: document.getElementById('teamsScore'),
    questionModal: document.getElementById('questionModal'),
    modalQuestionText: document.getElementById('modalQuestionText'),
    timer: document.getElementById('timer'),
    correctAnswer: document.getElementById('correctAnswer'),
    modalTeamsScore: document.getElementById('modalTeamsScore'),
    showAnswer: document.getElementById('showAnswer'),
    addPoints: document.getElementById('addPoints'),
    closeModal: document.getElementById('closeModal')
};

// Инициализация игры
function init() {
    // Добавляем первое поле для команды по умолчанию
    addTeamInput();
    
    // Слушатели событий
    elements.addTeam.addEventListener('click', addTeamInput);
    elements.startGame.addEventListener('click', startGame);
    elements.showAnswer.addEventListener('click', showCorrectAnswer);
    elements.addPoints.addEventListener('click', addPointsToTeam);
    elements.closeModal.addEventListener('click', closeModal);
}

// Добавление поля для ввода названия команды
function addTeamInput() {
    const teamId = state.teams.length;
    const teamInput = document.createElement('div');
    teamInput.className = 'team-input';
    teamInput.innerHTML = `
        <label>Команда ${teamId + 1}</label>
        <input type="text" id="team-${teamId}" placeholder="Название команды">
    `;
    elements.teamsContainer.appendChild(teamInput);
    
    // Добавляем пустую команду в состояние
    state.teams.push({
        id: teamId,
        name: '',
        points: 0
    });
    
    // Слушатель изменения названия команды
    document.getElementById(`team-${teamId}`).addEventListener('input', (e) => {
        state.teams[teamId].name = e.target.value.trim();
        checkStartConditions();
    });
    
    // Активируем кнопку "Начать игру", если есть хотя бы 2 команды
    if (state.teams.length >= 2) {
        elements.startGame.disabled = false;
    }
}

// Проверка условий для начала игры
function checkStartConditions() {
    const canStart = state.teams.length >= 2 && 
                     state.teams.every(team => team.name.length > 0);
    elements.startGame.disabled = !canStart;
}

// Начало игры
function startGame() {
    state.gameStarted = true;
    document.querySelector('.setup').style.display = 'none';
    elements.gameBoard.style.display = 'block';
    
    // Создаем игровое поле
    createGameBoard();
    
    // Обновляем таблицу счета
    updateScoreBoard();
}

// Создание игрового поля с категориями и вопросами
function createGameBoard() {
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

// Показать вопрос
function showQuestion(categoryId, questionId) {
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
}

// Запуск таймера
function startTimer() {
    state.timeLeft = 30;
    elements.timer.textContent = state.timeLeft;
    
    if (state.timer) {
        clearInterval(state.timer);
    }
    
    state.timer = setInterval(() => {
        state.timeLeft--;
        elements.timer.textContent = state.timeLeft;
        
        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            showCorrectAnswer();
        }
    }, 1000);
}

// Показать правильный ответ
function showCorrectAnswer() {
    clearInterval(state.timer);
    elements.correctAnswer.style.display = 'block';
    elements.showAnswer.disabled = true;
    elements.addPoints.disabled = false;
}

// Начислить баллы выбранной команде
function addPointsToTeam() {
    // Находим выбранную команду (первая с чекбоксом)
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
        
        // Обновляем таблицы счета
        updateScoreBoard();
        updateModalScoreBoard();
        
        // Пересоздаем игровое поле (чтобы обновить использованные вопросы)
        createGameBoard();
        
        // Закрываем модальное окно
        closeModal();
    }
}

// Закрыть модальное окно
function closeModal() {
    clearInterval(state.timer);
    elements.questionModal.style.display = 'none';
}

// Обновить таблицу счета на главном экране
function updateScoreBoard() {
    elements.teamsScore.innerHTML = '';
    
    state.teams.forEach(team => {
        const teamEl = document.createElement('div');
        teamEl.className = 'team-score';
        teamEl.innerHTML = `
            <div class="team-name">${team.name}</div>
            <div class="team-points">${team.points}</div>
        `;
        elements.teamsScore.appendChild(teamEl);
    });
}

// Обновить таблицу счета в модальном окне
function updateModalScoreBoard() {
    elements.modalTeamsScore.innerHTML = '';
    
    state.teams.forEach((team, index) => {
        const teamEl = document.createElement('div');
        teamEl.className = 'team-score';
        teamEl.innerHTML = `
            <input type="radio" name="modal-team" id="modal-team-${index}" value="${index}">
            <label for="modal-team-${index}">
                <div class="team-name">${team.name}</div>
                <div class="team-points">${team.points}</div>
            </label>
        `;
        elements.modalTeamsScore.appendChild(teamEl);
    });
}

// Запуск игры при загрузке страницы
window.onload = init;