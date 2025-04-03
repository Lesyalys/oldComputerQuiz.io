const backgroundImages = [
    'url("./public/img/modalBack.png")',
    'url("./public/img/modalBack2.png")',
    'url("./public/img/modalBack3.png")',
    // 'url("./public/img/modalBack4.png")',
    // 'url("./public/img/modalBack5.png")'
];

// Данные вопросов (5 категорий по 5 вопросов)
const questionsData = [
    {
        name: "Периферийные устройства",
        questions: [
            { text: "Какой разъём используется для подключения флеш-накопителей?", answer: "USB", points: 100 },
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
            { text: "Как называется последовательность инструкций для выполнения вычислений?", answer: "Алгоритм", points: 100 },
            { text: "Как называется метод поиска элемента в отсортированном массиве с делением на части? ", answer: "Бинарный поиск", points: 200 },
            { text: "Какая структура данных работает по принципу «первый вошёл – первый вышел»?", answer: "Очередь", points: 300 },
            { text: "Какой алгоритм используется для нахождения кратчайшего пути в графе?", answer: "Алгоритм Дейкстры", points: 400 },
            { text: "В чём заключается принцип работы квантовых вычислений по сравнению с классическими?", answer: "Использование кубитов, суперпозиции и квантового запутывания", points: 500 }
        ]
    }
];

// Состояние игры
const state = {
    teams: [],
    usedQuestions: [], // Массив использованных вопросов (категория-вопрос)
    currentQuestion: null,
    timer: null,
    timeLeft: 60,
    gameStarted: false,
    timerExpired: false,
    questionClosedManually: false
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
    document.getElementById('restartGame').addEventListener('click', resetGame);
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

// Запуск таймера
function startTimer() {
    state.timeLeft = 60;
    elements.timer.textContent = state.timeLeft;
    state.timerExpired = false; // Добавляем флаг истечения времени
    
    if (state.timer) {
        clearInterval(state.timer);
    }
    
    state.timer = setInterval(() => {
        state.timeLeft--;
        elements.timer.textContent = state.timeLeft;
        
        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            state.timerExpired = true; // Устанавливаем флаг при истечении времени
            showCorrectAnswer();
        }
    }, 1000);
}

// Показать правильный ответ
function showCorrectAnswer() {
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

// Начислить баллы выбранной команде
function addPointsToTeam() {
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

// Закрыть модальное окно
function closeModal() {
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
    }
    
    // Сбрасываем текущий вопрос
    state.currentQuestion = null;
}

elements.closeModal.addEventListener('click', () => {
    state.questionClosedManually = true;
    closeModal();
});


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


// Проверка окончания игры
function checkGameEnd() {
    // Проверяем, остались ли неиспользованные вопросы
    const totalQuestions = questionsData.reduce((sum, category) => sum + category.questions.length, 0);
    if (state.usedQuestions.length === totalQuestions) {
        showWinner();
    }
}

// Показать победителя
function showWinner() {
    // Находим команду с максимальным количеством очков
    let winner = state.teams[0];
    let isDraw = false;
    
    for (let i = 1; i < state.teams.length; i++) {
        if (state.teams[i].points > winner.points) {
            winner = state.teams[i];
            isDraw = false;
        } else if (state.teams[i].points === winner.points) {
            isDraw = true;
        }
    }
    
    const winnerModal = document.getElementById('winnerModal');
    const winnerInfo = document.getElementById('winnerInfo');
    
    if (isDraw) {
        // Ничья
        document.getElementById('winnerTitle').textContent = 'Ничья!';
        winnerInfo.innerHTML = `
            <p>Несколько команд набрали одинаковое количество очков:</p>
            ${state.teams.filter(t => t.points === winner.points)
                .map(t => `<p><strong>${t.name}</strong> - ${t.points} очков</p>`)
                .join('')}
        `;
    } else {
        // Есть победитель
        winnerInfo.innerHTML = `
            <p>Победила команда <strong>${winner.name}</strong>!</p>
            <p>С результатом: <strong>${winner.points}</strong> очков</p>
        `;
    }
    
    winnerModal.style.display = 'flex';
}

// Сброс игры
function resetGame() {
    state.teams.forEach(team => {
        team.points = 0;
    });
    state.usedQuestions = [];
    state.gameStarted = false;
    
    document.getElementById('winnerModal').style.display = 'none';
    document.querySelector('.setup').style.display = 'block';
    elements.gameBoard.style.display = 'none';
    
    updateScoreBoard();
}

// Запуск игры при загрузке страницы
window.onload = init;