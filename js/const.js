export const backgroundImages = [
    'url("./public/imgLight/modalBack.png")',
    'url("./public/imgLight/modalBack2.png")',
    'url("./public/imgLight/modalBack3.png")',
];

export const questionsData = [
    {
        name: "Периферийные устройства",
        questions: [
            { text: "Назовите тип интерфейса, изображённого на рисунке:", img:'usb.png', answer: "Разъём USB Type-C", points: 10 },
            { text: "Как называется устройство для ввода рукописного текста и рисунков в компьютер? ", img:null, answer: "Графический планшет", points: 20 },
            { text: "Какой тип принтера использует порошковый краситель для печати?", img:null, answer: "Лазерный принтер", points: 30 },
            { text: "Как называеться данный разьем?", img:'rca.jpg', answer: "SPDIF 'тюльпан'", points: 40 },
            { text: "", img:null, answer: "", points: 50 },
            { text: "Какой цвет разъема PS/2 обычно используется для подключения клавиатуры?", img:null, answer: "Фиолетовый ", points: 60 },
            { text: "Как называется устройство, преобразующее аналоговый видеосигнал с ТВ-антенны или кабельного телевидения в цифровой формат, пригодный для воспроизведения на компьютере?",img:null,  answer: "TV-тюнер", points: 70 },
            { text: "Какой интерфейс передачи данных, использующий дифференциальную передачу и поддерживающий скорости до 10 Гбит/с, пришёл на смену USB 2.0?",img:null,  answer: "USB 3.0 / USB 3.1", points: 80 },
            { text: "Какое устройство позволяет преобразовать аналоговые сигналы, полученные с физических датчиков (температуры, давления и т.д.), в цифровой вид для анализа на компьютере?", img:null, answer: "АЦП — Аналого-цифровой преобразователь", points: 90 },
            { text: "Какой интерфейс, используемый в профессиональной сфере, позволяет передавать данные между компьютером и аудиоустройствами с высокой пропускной способностью, был разработан компанией Apple?", img:null, answer: "Thunderbolt или FireWire", points: 100 }
        ]
    },
    {
        name: "Архитектура компьютера",
        questions: [
            { text: "Как называется этот компонент компьютера? ", img:'cp.png', answer: "Процессор, CPU", points: 10 },
            { text: "Какое устройство преобразует переменный ток (AC) из розетки (~220 В) в постоянный (DC), необходимый для работы компонентов ПК",img:null,  answer: "Блок питания", points: 20 },
            { text: "Как называется область памяти в процессоре, используемая для хранения промежуточных результатов вычислений и управления?",img:null,  answer: "Регистр", points: 30 },
            { text: "какой тип архитектуры изображен на картинке?", img:'garv.png', answer: "Гарвардская архитектура", points: 40 },
            { text: "Какой компонент компьютера хранит данные и инструкции, необходимые для текущих вычислений, но теряет их при выключении питания?",img:null, answer: "Оперативная память, RAM", points: 50 },
            { text: "Какое поколение памяти представленно на изображении:", answer: "SDRAM",img:'ram.png',  points: 60 },
            { text: "Как называется шина, соединяющая процессор, оперативную память и другие устройства? ",img:null, answer: "Системная шина", points: 70 },
            { text: "Как называется высокоскоростная память, используемая процессором для временного хранения часто используемых данных, которая делится на уровни L1, L2 и L3?", img:null, answer: "Кеш-память процессора", points: 80 },
            { text: "", img:null, answer: "", points: 90 },
            { text: "Как называется микросхема или набор микросхем, который управляет работой материнской платы и взаимодействием её компонентов?  ", img:null, answer: "Чипсет", points: 100 }
        ]
    },
    {
        name: "История вычислительной техники",
        questions: [
            { text: "Кто считается создателем первого программируемого электромеханического компьютера?", img: null, answer: "Конрад Цузе", points: 10 },
            { text: "Как назывался первый массово произведённый персональный компьютер?", img: null, answer: "IBM PC 5150", points: 20 },
            { text: "Какой компьютер изображён на фото?", img: "babig.png", answer: "Аналитическая машина Чарльза Бэббиджа", points: 30 },
            { text: "Как звали женщину, считающуюся первой программисткой, которая писала алгоритмы для аналитической машины?", img: null, answer: "Ада Лавлейс", points: 40 },
            { text: "Какой ноутбук изображён на фото?", img: "obs.png", answer: "Osborne 1", points: 50 },
            { text: "Какой советский инженер возглавлял разработку первой советской ЭВМ «МЭСМ», запущенной в 1951 году?", img: null, answer: "Сергей Алексеевич Лебедев", points: 60 },
            { text: "Какая компания выпустила первый коммерческий микропроцессор?", img: null, answer: "Intel — 4004 в 1971 году", points: 70 },
            { text: "Какая серия компьютеров изображена на фото?", img: "ec.png", answer: "ЕС ЭВМ (Единая Система ЭВМ)", points: 80 },
            { text: "Как назывался первый в мире компьютер с хранимой в памяти программой?", img: null, answer: "Манчестерская «Baby» (Manchester Small-Scale Experimental Machine)", points: 90 },
            { text: "Какая операционная система была установлена на первом Macintosh, выпущенном в 1984 году?", img: null, answer: "System 1 (Macintosh System Software)", points: 100 }
        ]
    },
    {
        name: "Программное обеспечение",
        questions: [
            { text: "Какая операционная система изображена на фото?", img: "win.png", answer: "Windows", points: 10 },
            { text: "Программа, которая интерпретирует машинный код, обеспечивает взаимодействие между прикладными программами и оборудованием это...", img: null, answer: "Операционная система (ОС)", points: 20 },
            { text: "Как называется тип программного обеспечения, исходный код которого открыт и доступен для изменения пользователями?", img: null, answer: "Свободное (open-source) программное обеспечение", points: 30 },
            { text: "Какая технология позволяет запускать несколько виртуальных ОС на одном ПК?", answer: "Виртуализация", img: null, points: 40 },
            { text: "Какой язык программирования, разработанный Деннисом Ритчи в 1972 году, до сих пор используется для написания ядра большинства операционных систем? ", img:null, answer: "C", points: 50 },
            { text: "Как называется программный компонент, обеспечивающий пользователю взаимодействие с операционной системой через окна, кнопки и пиктограммы?", img: null, answer: "Графический интерфейс, GUI", points: 60 },
            { text: "",img:null,  answer: "DRM", points: 70 },
            { text: "Механизм, предотвращающий копирование и модификацию программного кода, применяемый в коммерческом ПО и играх называется...",img:null,  answer: "DRM", points: 80 },
            { text: "Прошивка  (Firmware), которая инициализирует оборудование до загрузки ОС, называется", img: null, answer: "BIOS / UEFI", points: 90 },
            { text: "Как называется подход к разработке программного обеспечения, при котором создаются независимые модули, взаимодействующие через API?", img: null, answer: "Сервис-ориентированная архитектура (SOA / Microservices)", points: 100 }
        ]
    },
    {
        name: "Алгоритмы и вычисления",
        questions: [
            { text: "Как называется точная и конечная последовательность действий, предназначенная для решения поставленной задачи?",img:null, answer: "Алгоритм", points: 10 },
            { text: "Как называется метод поиска элемента в отсортированном массиве с делением на части? ", img:null, answer: "Бинарный поиск", points: 20 },
            { text: "Какая структура данных работает по принципу «первый вошёл – первый вышел»?", img:null, answer: "Очередь", points: 30 },
            { text: "", img:null, answer: "", points: 40 },
            { text: "",img:null,  answer: "", points: 50 },
            { text: "Какой алгоритм используется для нахождения кратчайшего пути в графе?", img:null, answer: "Алгоритм Дейкстры", points: 60 },
            { text: "",img:null,  answer: "", points: 70 },
            { text: "Как называется нотация,которая показывает как будет изменяться вычислительная сложность алгоритма с изменением количества входных данных в худшем для алгоритма случае?", img:null, answer: "Большое O (Big O notation) / О-нотация", points: 80 },
            { text: "", img:null, answer: "", points: 90 },
            { text: "В чём заключается принцип работы квантовых вычислений по сравнению с классическими?", img:null, answer: "Использование кубитов, суперпозиции и квантового запутывания", points: 100 }
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