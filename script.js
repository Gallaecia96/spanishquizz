// ===========================
// SPANISH QUESTION BANK ONLY
// ===========================
const spanishDB = {
  // --- SER vs ESTAR (simple prompts; accept with/without pronoun) ---
  ser_estar: [
    // SER (identity/origin/time/traits)
    { question: "I am (ser)", answers: ["yo soy", "soy"] },
    { question: "You are (ser, informal)", answers: ["tú eres", "tu eres", "eres"] },
    { question: "He is (ser)", answers: ["él es", "el es", "es"] },
    { question: "She is (ser)", answers: ["ella es", "es"] },
    { question: "We are (ser)", answers: ["nosotros somos", "somos"] },
    { question: "You all are (ser, Spain)", answers: ["vosotros sois", "sois"] },
    { question: "They are (ser)", answers: ["ellos son", "son"] },

    // ESTAR (states/locations)
    { question: "I am (estar)", answers: ["yo estoy", "estoy"] },
    { question: "You are (estar, informal)", answers: ["tú estás", "tu estas", "estás", "estas"] },
    { question: "He is (estar)", answers: ["él está", "el esta", "está", "esta"] },
    { question: "She is (estar)", answers: ["ella está", "esta", "está"] },
    { question: "We are (estar)", answers: ["nosotros estamos", "estamos"] },
    { question: "You all are (estar, Spain)", answers: ["vosotros estáis", "vosotros estais", "estáis", "estais"] },
    { question: "They are (estar)", answers: ["ellos están", "estan", "están"] },

    // Mini sentence drills (ser)
    { question: "We are teachers (ser)", answers: ["nosotros somos profesores", "somos profesores"] },
    { question: "She is from Madrid (ser)", answers: ["ella es de madrid", "es de madrid"] },
    { question: "Today is Monday (ser)", answers: ["hoy es lunes"] },
    // Mini sentence drills (estar)
    { question: "I am at home (estar)", answers: ["yo estoy en casa", "estoy en casa"] },
    { question: "They are tired (estar)", answers: ["ellos están cansados", "ellos estan cansados", "están cansados", "estan cansados"] },
    { question: "We are happy (estar)", answers: ["nosotros estamos felices", "estamos felices"] },
  ],

  // --- REGULAR -AR PRESENT (hablar, estudiar, trabajar) ---
  reg_ar: [
    // HABLAR
    { question: "I speak (hablar)", answers: ["yo hablo", "hablo"] },
    { question: "You speak (hablar, informal)", answers: ["tú hablas", "tu hablas", "hablas"] },
    { question: "He speaks (hablar)", answers: ["él habla", "el habla", "habla"] },
    { question: "We speak (hablar)", answers: ["nosotros hablamos", "hablamos"] },
    { question: "You all speak (Spain, hablar)", answers: ["vosotros habláis", "vosotros hablais", "habláis", "hablais"] },
    { question: "They speak (hablar)", answers: ["ellos hablan", "hablan"] },

    // ESTUDIAR
    { question: "I study (estudiar)", answers: ["yo estudio", "estudio"] },
    { question: "You study (estudiar, informal)", answers: ["tú estudias", "tu estudias", "estudias"] },
    { question: "She studies (estudiar)", answers: ["ella estudia", "estudia"] },
    { question: "We study (estudiar)", answers: ["nosotros estudiamos", "estudiamos"] },

    // TRABAJAR
    { question: "I work (trabajar)", answers: ["yo trabajo", "trabajo"] },
    { question: "You all work (Spain, trabajar)", answers: ["vosotros trabajáis", "vosotros trabajais", "trabajáis", "trabajais"] },
  ],

  // --- REGULAR -ER PRESENT (comer, aprender, beber) ---
  reg_er: [
    // COMER
    { question: "I eat (comer)", answers: ["yo como", "como"] },
    { question: "You eat (comer, informal)", answers: ["tú comes", "tu comes", "comes"] },
    { question: "He eats (comer)", answers: ["él come", "el come", "come"] },
    { question: "We eat (comer)", answers: ["nosotros comemos", "comemos"] },
    { question: "You all eat (Spain, comer)", answers: ["vosotros coméis", "vosotros comeis", "coméis", "comeis"] },
    { question: "They eat (comer)", answers: ["ellos comen", "comen"] },

    // APRENDER
    { question: "I learn (aprender)", answers: ["yo aprendo", "aprendo"] },
    { question: "You learn (aprender, informal)", answers: ["tú aprendes", "tu aprendes", "aprendes"] },
    { question: "We learn (aprender)", answers: ["nosotros aprendemos", "aprendemos"] },

    // BEBER
    { question: "She drinks (beber)", answers: ["ella bebe", "bebe"] },
    { question: "You all drink (Spain, beber)", answers: ["vosotros bebéis", "vosotros bebeis", "bebéis", "bebeis"] },
  ],

  // --- REGULAR -IR PRESENT (vivir, escribir, abrir) ---
  reg_ir: [
    // VIVIR
    { question: "I live (vivir)", answers: ["yo vivo", "vivo"] },
    { question: "You live (vivir, informal)", answers: ["tú vives", "tu vives", "vives"] },
    { question: "He lives (vivir)", answers: ["él vive", "el vive", "vive"] },
    { question: "We live (vivir)", answers: ["nosotros vivimos", "vivimos"] },
    { question: "You all live (Spain, vivir)", answers: ["vosotros vivís", "vosotros vivis", "vivís", "vivis"] },
    { question: "They live (vivir)", answers: ["ellos viven", "viven"] },

    // ESCRIBIR
    { question: "I write (escribir)", answers: ["yo escribo", "escribo"] },
    { question: "You write (escribir, informal)", answers: ["tú escribes", "tu escribes", "escribes"] },
    { question: "We write (escribir)", answers: ["nosotros escribimos", "escribimos"] },

    // ABRIR
    { question: "She opens (abrir)", answers: ["ella abre", "abre"] },
    { question: "You all open (Spain, abrir)", answers: ["vosotros abrís", "vosotros abris", "abrís", "abris"] },
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
