// Данные вопросов (5 категорий по 5 вопросов)
const questionsData = [
    {
        name: "Периферийные устройства",
        questions: [
            { text: "Какой разъём чаще всего используется для подключения флеш-накопителей?", answer: "USB", points: 100 },
            { text: "Как называется устройство для ввода рукописного текста и рисунков в компьютер? ", answer: "Графический планшет", points: 200 },
            { text: "Какой тип принтера использует порошковый краситель для печати?", answer: "Лазерный принтер", points: 300 },
            { text: "Как называется устройство, позволяющее переводить аналоговое видео в цифровой формат?", answer: "Видеозахват/TV-тюнер", points: 400 },
            { text: "Какой интерфейс используется для подключения профессиональных аудиоинтерфейсов к компьютеру? ", answer: "Thunderbolt или FireWire", points: 500 }
        ]
    },
    {
        name: "Архитектура компьютера",
        questions: [
            { text: "Как называется основной вычислительный элемент компьютера? ", answer: "Процессор, CPU", points: 100 },
            { text: "Какой компонент компьютера отвечает за временное хранение данных во время работы?", answer: "Оперативная память, RAM", points: 200 },
            { text: "Как называется шина, соединяющая процессор, оперативную память и другие устройства? ", answer: "Системная шина", points: 300 },
            { text: "Что такое кеш-память процессора и зачем она нужна? ", answer: "Быстрая память для хранения часто используемых данных", points: 400 },
            { text: "Какой компонент компьютера управляет взаимодействием процессора с оперативной памятью и периферией? ", answer: "Чипсет", points: 500 }
        ]
    },
    {
        name: "История вычислительной техники",
        questions: [
            { text: "Кто считается создателем первого компьютера?", answer: "Чарльз Бэббиджи", points: 100 },
            { text: "Как назывался первый массово произведённый персональный компьютер? ", answer: "IBM PC 5150", points: 200 },
            { text: "Какой компьютер стал первым в истории ноутбуком? ", answer: "Osborne 1", points: 300 },
            { text: "Какая компания выпустила первый коммерческий микропроцессор? ", answer: "Intel — 4004 в 1971 году", points: 400 },
            { text: "Как называлась советская серия компьютеров, созданная как аналог IBM PC? ", answer: "ЕС ЭВМ — Единая Система ЭВМ", points: 500 }
        ]
    },
    {
        name: "Программное обеспечение",
        questions: [
            { text: "Какая операционная система установлена на большинстве персональных компьютеров? ", answer: "Windows", points: 100 },
            { text: "Как называется программа, обеспечивающая взаимодействие пользователя с ОС? ", answer: "Графический интерфейс, GUI", points: 200 },
            { text: "Как называется технология, позволяющая запускать несколько виртуальных ОС на одном ПК? ", answer: "Виртуализация", points: 300 },
            { text: "Какой язык программирования считается основным для создания операционных систем?", answer: "C или C++", points: 400 },
            { text: "Как называется технология защиты программного кода от модификации и взлома? ", answer: "Обфускация кода или DRM", points: 500 }
        ]
    },
    {
        name: "Алгоритмы и вычисления",
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