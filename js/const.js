export const backgroundImages = [
    'url("./public/imgLight/modalBack.png")',
    'url("./public/imgLight/modalBack2.png")',
    'url("./public/imgLight/modalBack3.png")',
];

// Данные вопросов (5 категорий по 5 вопросов)
export const questionsData = [
    {
        name: "Периферийные устройства",
        questions: [
            { text: "Как называется стандартный интерфейс для подключения флеш-накопителей, внешних жёстких дисков и других периферийных устройств, впервые представленный в 1996 году? ", answer: "USB", points: 100 },
            { text: "Как называется устройство для ввода рукописного текста и рисунков в компьютер? ", answer: "Графический планшет", points: 200 },
            { text: "Какой тип принтера использует порошковый краситель для печати?", answer: "Лазерный принтер", points: 300 },
            { text: "Как называется устройство, преобразующее аналоговый видеосигнал с ТВ-антенны или кабельного телевидения в цифровой формат, пригодный для воспроизведения на компьютере?", answer: "TV-тюнер", points: 400 },
            { text: "Какой интерфейс, используемый в профессиональной сфере, позволяет передавать данные между компьютером и аудиоустройствами с высокой пропускной способностью, был разработан компанией Apple?", answer: "Thunderbolt или FireWire", points: 500 }
        ]
    },
    {
        name: "Архитектура компьютера",
        questions: [
            { text: "Как называется основной вычислительный элемент компьютера? ", answer: "Процессор, CPU", points: 100 },
            { text: "Какой компонент компьютера хранит данные и инструкции, необходимые для текущих вычислений, но теряет их при выключении питания?", answer: "Оперативная память, RAM", points: 200 },
            { text: "Как называется шина, соединяющая процессор, оперативную память и другие устройства? ", answer: "Системная шина", points: 300 },
            { text: "Как называется высокоскоростная память, используемая процессором для временного хранения часто используемых данных, которая делится на уровни L1, L2 и L3?", answer: "Кеш-память процессора", points: 400 },
            { text: "Как называется микросхема или набор микросхем, который управляет работой материнской платы и взаимодействием её компонентов?  ", answer: "Чипсет", points: 500 }
        ]
    },
    {
        name: "История вычислительной техники",
        questions: [
            { text: "Кто считается создателем первого программируемого электромеханического компьютера?", answer: " Конрад Цузе", points: 100 },
            { text: "Как назывался первый массово произведённый персональный компьютер? ", answer: "IBM PC 5150", points: 200 },
            { text: "Какой компьютер стал первым в истории ноутбуком? ", answer: "Osborne 1", points: 300 },
            { text: "Какая компания выпустила первый коммерческий микропроцессор? ", answer: "Intel — 4004 в 1971 году", points: 400 },
            { text: "Как называлась советская серия компьютеров, созданная как аналог IBM PC? ", answer: "ЕС ЭВМ — Единая Система ЭВМ", points: 500 }
        ]
    },
    {
        name: "Программное обеспечение",
        questions: [
            { text: "Как называется самая распространённая операционная система для персональных компьютеров, разработанная компанией Microsoft?", answer: "Windows", points: 100 },
            { text: "Как называется программный компонент, обеспечивающий пользователю взаимодействие с операционной системой через окна, кнопки и пиктограммы? ", answer: "Графический интерфейс, GUI", points: 200 },
            { text: "Как называется технология, позволяющая запускать несколько виртуальных ОС на одном ПК? ", answer: "Виртуализация", points: 300 },
            { text: "Какой язык программирования, разработанный Деннисом Ритчи в 1972 году, до сих пор используется для написания ядра большинства операционных систем? ", answer: "C", points: 400 },
            { text: "Как называется программный механизм, предотвращающий копирование и модификацию программного кода, применяемый в коммерческом ПО и играх?", answer: "DRM", points: 500 }
        ]
    },
    {
        name: "Алгоритмы и вычисления",
        questions: [
            { text: "Как называется точная и конечная последовательность действий, предназначенная для решения поставленной задачи?", answer: "Алгоритм", points: 100 },
            { text: "Как называется метод поиска элемента в отсортированном массиве с делением на части? ", answer: "Бинарный поиск", points: 200 },
            { text: "Какая структура данных работает по принципу «первый вошёл – первый вышел»?", answer: "Очередь", points: 300 },
            { text: "Какой алгоритм используется для нахождения кратчайшего пути в графе?", answer: "Алгоритм Дейкстры", points: 400 },
            { text: "В чём заключается принцип работы квантовых вычислений по сравнению с классическими?", answer: "Использование кубитов, суперпозиции и квантового запутывания", points: 500 }
        ]
    }
];

// Состояние игры
export const state = {
    teams: [],
    usedQuestions: [],
    currentQuestion: null,
    timer: null,
    timeLeft: 60,
    gameStarted: false,
    timerExpired: false,
    questionClosedManually: false
};


// Элементы DOM
export const elements = {
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
    closeModal: document.getElementById('closeModal'),
    restartGame: document.getElementById('restartGame'),
    darckShem: document.getElementById('logoNVSU')
};