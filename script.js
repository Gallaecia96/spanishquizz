// ===========================
// SPANISH QUESTION BANK ONLY
// ===========================
const spanishDB = {

// --- REGULAR INFINITIVES (AR / ER / IR) ---
  
reg_inf: [
  // --- AR VERBS ---
  { question: "to dance", answers: ["bailar"] },
  { question: "to finish", answers: ["terminar"] },
  { question: "to study", answers: ["estudiar"] },
  { question: "to work", answers: ["trabajar"] },
  { question: "to speak / talk", answers: ["hablar"] },
  { question: "to listen", answers: ["escuchar"] },
  { question: "to look / watch", answers: ["mirar"] },
  { question: "to need", answers: ["necesitar"] },
  { question: "to walk", answers: ["caminar"] },
  { question: "to buy", answers: ["comprar"] },

  // --- ER VERBS ---
  { question: "to eat", answers: ["comer"] },
  { question: "to learn", answers: ["aprender"] },
  { question: "to drink", answers: ["beber"] },
  { question: "to run", answers: ["correr"] },
  { question: "to sell", answers: ["vender"] },
  { question: "to believe", answers: ["creer"] },
  { question: "to promise", answers: ["prometer"] },
  { question: "to understand", answers: ["comprender"] },
  { question: "to read", answers: ["leer"] },
  { question: "to sweep", answers: ["barrer"] },

  // --- IR VERBS ---
  { question: "to live", answers: ["vivir"] },
  { question: "to write", answers: ["escribir"] },
  { question: "to open", answers: ["abrir"] },
  { question: "to decide", answers: ["decidir"] },
  { question: "to receive", answers: ["recibir"] },
  { question: "to divide / share", answers: ["compartir"] },
  { question: "to describe", answers: ["describir"] },
  { question: "to suffer", answers: ["sufrir"] },
  { question: "to permit / allow", answers: ["permitir"] },
  { question: "to attend", answers: ["asistir"] },
],

  
// --- REGULAR -AR PRESENT (hablar, estudiar, trabajar) ---
reg_ar: [
  // HABLAR
  { question: "I speak", answers: ["yo hablo", "hablo"] },
  { question: "You speak", answers: ["tú hablas", "tu hablas", "hablas"] },
  { question: "He speaks", answers: ["él habla", "el habla", "habla"] },
  { question: "She speaks", answers: ["ella habla", "habla"] },
  { question: "We speak", answers: ["nosotros hablamos", "hablamos"] },
  { question: "You all speak", answers: ["vosotros habláis", "vosotros hablais", "habláis", "hablais"] },
  { question: "They speak", answers: ["ellos hablan", "hablan"] },

  // ESTUDIAR
  { question: "I study", answers: ["yo estudio", "estudio"] },
  { question: "You study", answers: ["tú estudias", "tu estudias", "estudias"] },
  { question: "He studies", answers: ["él estudia", "el estudia", "estudia"] },
  { question: "She studies", answers: ["ella estudia", "estudia"] },
  { question: "We study", answers: ["nosotros estudiamos", "estudiamos"] },
  { question: "You all study", answers: ["vosotros estudiáis", "vosotros estudiais", "estudiáis", "estudiais"] },
  { question: "They study", answers: ["ellos estudian", "estudian"] },

  // TRABAJAR
  { question: "I work", answers: ["yo trabajo", "trabajo"] },
  { question: "You work", answers: ["tú trabajas", "tu trabajas", "trabajas"] },
  { question: "He works", answers: ["él trabaja", "el trabaja", "trabaja"] },
  { question: "She works", answers: ["ella trabaja", "trabaja"] },
  { question: "We work", answers: ["nosotros trabajamos", "trabajamos"] },
  { question: "You all work", answers: ["vosotros trabajáis", "vosotros trabajais", "trabajáis", "trabajais"] },
  { question: "They work", answers: ["ellos trabajan", "trabajan"] },
],

// --- REGULAR -ER PRESENT (comer, aprender, beber) ---
reg_er: [
  // COMER
  { question: "I eat", answers: ["yo como", "como"] },
  { question: "You eat", answers: ["tú comes", "tu comes", "comes"] },
  { question: "He eats", answers: ["él come", "el come", "come"] },
  { question: "She eats", answers: ["ella come", "come"] },
  { question: "We eat", answers: ["nosotros comemos", "comemos"] },
  { question: "You all eat", answers: ["vosotros coméis", "vosotros comeis", "coméis", "comeis"] },
  { question: "They eat", answers: ["ellos comen", "comen"] },

  // APRENDER
  { question: "I learn", answers: ["yo aprendo", "aprendo"] },
  { question: "You learn", answers: ["tú aprendes", "tu aprendes", "aprendes"] },
  { question: "He learns", answers: ["él aprende", "el aprende", "aprende"] },
  { question: "She learns", answers: ["ella aprende", "aprende"] },
  { question: "We learn", answers: ["nosotros aprendemos", "aprendemos"] },
  { question: "You all learn", answers: ["vosotros aprendéis", "vosotros aprendeis", "aprendéis", "aprendeis"] },
  { question: "They learn", answers: ["ellos aprenden", "aprenden"] },

  // BEBER
  { question: "I drink", answers: ["yo bebo", "bebo"] },
  { question: "You drink", answers: ["tú bebes", "tu bebes", "bebes"] },
  { question: "He drinks", answers: ["él bebe", "el bebe", "bebe"] },
  { question: "She drinks", answers: ["ella bebe", "bebe"] },
  { question: "We drink", answers: ["nosotros bebemos", "bebemos"] },
  { question: "You all drink", answers: ["vosotros bebéis", "vosotros bebeis", "bebéis", "bebeis"] },
  { question: "They drink", answers: ["ellos beben", "beben"] },
],

// --- REGULAR -IR PRESENT (vivir, escribir, abrir) ---
reg_ir: [
  // VIVIR
  { question: "I live", answers: ["yo vivo", "vivo"] },
  { question: "You live", answers: ["tú vives", "tu vives", "vives"] },
  { question: "He lives", answers: ["él vive", "el vive", "vive"] },
  { question: "She lives", answers: ["ella vive", "vive"] },
  { question: "We live", answers: ["nosotros vivimos", "vivimos"] },
  { question: "You all live", answers: ["vosotros vivís", "vosotros vivis", "vivís", "vivis"] },
  { question: "They live", answers: ["ellos viven", "viven"] },

  // ESCRIBIR
  { question: "I write", answers: ["yo escribo", "escribo"] },
  { question: "You write", answers: ["tú escribes", "tu escribes", "escribes"] },
  { question: "He writes", answers: ["él escribe", "el escribe", "escribe"] },
  { question: "She writes", answers: ["ella escribe", "escribe"] },
  { question: "We write", answers: ["nosotros escribimos", "escribimos"] },
  { question: "You all write", answers: ["vosotros escribís", "vosotros escribis", "escribís", "escribis"] },
  { question: "They write", answers: ["ellos escriben", "escriben"] },

  // ABRIR
  { question: "I open", answers: ["yo abro", "abro"] },
  { question: "You open", answers: ["tú abres", "tu abres", "abres"] },
  { question: "He opens", answers: ["él abre", "el abre", "abre"] },
  { question: "She opens", answers: ["ella abre", "abre"] },
  { question: "We open", answers: ["nosotros abrimos", "abrimos"] },
  { question: "You all open", answers: ["vosotros abrís", "vosotros abris", "abrís", "abris"] },
  { question: "They open", answers: ["ellos abren", "abren"] },
],
  l1_4: [
        { question: “weather”, answers: [“tiempo”] },
        { question: “area, zone”, answers: [“zona”, “área”, “area”] },
        { question: “home”, answers: [“hogar”] },
        { question: “bond”, answers: [“vínculo”] },
        { question: “finances”, answers: [“finanzas] },
        { question: “partner”, answers: [“pareja”] },
        { question: “relationship”, answers: [“relación”] },
        { question: “to break up”, answers: [“romper”] },
        { question: “still”, answers: [“todavía”, “aún”, “aun”] },
        { question: “place”, answers: [“lugar”, “sitio”] },
        { question: “at least”, answers: [“por “lo menos] },
        { question: “the usual”, answers: [“lo normal”] },
        { question: “important”, answers: [“importante”] },
        { question: “responsibility”, answers: [“responsabilidad”] },
        { question: “shelter”, answers: [“refugio”] },
        { question: “empty”, answers: [“vacío”, “vacía”] },
        { question: “when”, answers: [“cuando”, “cuándo”] },
        { question: “wide”, answers: [“amplio”, “amplia”] },
    ],


};

// ===========================
// QUIZ ENGINE (unchanged UX)
// ===========================
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Quiz state
let topicKey = null;
let questions = [];
let originalTopic = [];
let wrongQuestions = [];
let currentQuestion = 0;
let score = 0;

// Start a new round with a topic
function startTopic(key, customQuestions) {
  let topicArr = null;

  if (key && spanishDB[key]) topicArr = spanishDB[key];
  else if (customQuestions) topicArr = customQuestions;
  else topicArr = [];

  topicKey = key;
  originalTopic = topicArr;
  questions = shuffle(topicArr).slice(0, Math.min(10, topicArr.length));
  wrongQuestions = [];
  currentQuestion = 0;
  score = 0;
  showSelect(false);
  setResult('');
  loadQuestion();
}

// Show/hide topic selector
function showSelect(show) {
  const optionMenu = document.getElementById('select_topic');
  const selectButton = document.getElementsByClassName('open-select')[0];
  const quizContainer = document.getElementsByClassName('quiz-container')[0];
  if (show) {
    optionMenu.style.display = 'flex';
    selectButton.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'none';
  } else {
    optionMenu.style.display = 'none';
    selectButton.style.display = 'block';
    if (quizContainer) quizContainer.style.display = 'block';
  }
}

// Set result message
function setResult(msg, color = 'black') {
  const resultElement = document.getElementById("result");
  resultElement.textContent = msg;
  resultElement.style.color = color;
}

// Load current question or show final score
function loadQuestion() {
  const headingone = document.getElementsByTagName('h1')[0];
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const resultElement = document.getElementById("result");

  headingone.style.display = 'none';

  if (currentQuestion < questions.length) {
    const currentQuestionData = questions[currentQuestion];

    questionElement.textContent = currentQuestionData.question;
    setResult("");

    optionsContainer.innerHTML = "";

    // Free-text input only
    const input = document.createElement("input");
    input.type = "text";
    input.autofocus = true;
    input.id = "answer-input";

    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        submitButton.click();
      }
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Send";
    submitButton.id = "submit-button";
    submitButton.addEventListener("click", () => {
      checkInputAnswer(input.value, currentQuestionData.answers, optionsContainer, input, submitButton);
    });

    optionsContainer.appendChild(input);
    optionsContainer.appendChild(submitButton);

  } else {
    // Final score
    questionElement.textContent = "¡Test completado!";
    optionsContainer.innerHTML = "";
    resultElement.innerHTML =
      "Score: " + score + " / " + questions.length +
      '.<br><br>Total: ' + parseInt(score * 10 / questions.length) + ' sobre 10.';

    if (wrongQuestions.length > 0) {
      const reviewButton = document.createElement("button");
      reviewButton.textContent = "Review mistakes";
      optionsContainer.appendChild(reviewButton);
      reviewButton.addEventListener("click", () => {
        const reviewSet = shuffle(wrongQuestions).slice(0, Math.min(10, wrongQuestions.length));
        startTopic(null, reviewSet);
      });
    }

    const newRoundButton = document.createElement("button");
    newRoundButton.textContent = "New round";
    optionsContainer.appendChild(newRoundButton);
    newRoundButton.addEventListener("click", () => startTopic(topicKey, originalTopic));

    const chooseTopicButton = document.createElement("button");
    chooseTopicButton.textContent = "Choose another topic";
    optionsContainer.appendChild(chooseTopicButton);
    chooseTopicButton.addEventListener("click", () => showSelect(true));
  }
}

// Check answer with immediate correction + try-correct flow
function checkInputAnswer(inputValue, correctAnswers, optionsContainer, inputElem, submitBtn) {
  const normalized = inputValue.trim().toLowerCase();
  if (correctAnswers.some(ans => normalized === ans.toLowerCase())) {
    score++;
    setResult("¡Bien!", "green");
    currentQuestion++;
    setTimeout(() => { loadQuestion(); }, 1200);
  } else {
    const q = questions[currentQuestion];
    if (!wrongQuestions.includes(q)) wrongQuestions.push(q);
    setResult("Try with: " + correctAnswers.join(", "), "orange");

    if (inputElem && submitBtn) {
      inputElem.disabled = true;
      submitBtn.disabled = true;
    }

    const tryAgainInput = document.createElement("input");
    tryAgainInput.type = "text";
    tryAgainInput.autofocus = true;
    tryAgainInput.id = "try-again-input";
    tryAgainInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        tryAgainBtn.click();
      }
    });

    const tryAgainBtn = document.createElement("button");
    tryAgainBtn.textContent = "Try correct answer";
    tryAgainBtn.addEventListener("click", () => {
      const tryValue = tryAgainInput.value.trim().toLowerCase();
      if (correctAnswers.some(ans => tryValue === ans.toLowerCase())) {
        setResult("Correct! Good job!", "green");
      } else {
        setResult("Still not correct. Correct answers: " + correctAnswers.join(", "), "red");
      }
      currentQuestion++;
      setTimeout(() => { loadQuestion(); }, 2200);
    });

    optionsContainer.appendChild(document.createElement("br"));
    optionsContainer.appendChild(tryAgainInput);
    optionsContainer.appendChild(tryAgainBtn);
  }
}

// Topic selection from HTML buttons (Spanish only)
window.theme_is = function(chosen) {
  for (const key in spanishDB) {
    if (spanishDB[key] === chosen) {
      startTopic(key);
      return;
    }
  }
  if (Array.isArray(chosen)) startTopic(null, chosen);
};

// Open/close select menu
window.openSelect = function() { showSelect(true); };
window.closeSelect = function() { showSelect(false); };
