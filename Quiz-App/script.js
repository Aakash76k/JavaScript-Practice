
const studentForm = document.getElementById("studentForm");
const quizSection = document.getElementById("quizSection");

const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const options = document.querySelectorAll('input[name="answer"]');
const optionLabels = document.querySelectorAll(".option span");

const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("score");
const progressBar = document.getElementById("progressBar");

// ==========================================
// 100 QUESTIONS
// 25 HTML + 25 CSS + 50 JAVASCRIPT
// ==========================================

const questions = [

  // ==========================================
  // HTML - 25 QUESTIONS
  // ==========================================

  {
    category: "HTML",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language"
    ],
    answer: "A"
  },

  {
    category: "HTML",
    question: "Which tag is used to create a paragraph?",
    options: [
      "<p>",
      "<para>",
      "<paragraph>",
      "<text>"
    ],
    answer: "A"
  },

  {
    category: "HTML",
    question: "Which tag is used for the largest heading?",
    options: [
      "<h6>",
      "<heading>",
      "<h1>",
      "<head>"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    answer: "B"
  },

  {
    category: "HTML",
    question: "Which attribute specifies the destination of a hyperlink?",
    options: [
      "src",
      "link",
      "href",
      "url"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which tag is used to display an image?",
    options: [
      "<image>",
      "<img>",
      "<picture>",
      "<src>"
    ],
    answer: "B"
  },

  {
    category: "HTML",
    question: "Which attribute is used to provide alternative text for an image?",
    options: [
      "title",
      "src",
      "alt",
      "text"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which tag creates an unordered list?",
    options: [
      "<ol>",
      "<list>",
      "<ul>",
      "<li>"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which tag creates an ordered list?",
    options: [
      "<ul>",
      "<ol>",
      "<li>",
      "<order>"
    ],
    answer: "B"
  },

  {
    category: "HTML",
    question: "Which tag is used for a list item?",
    options: [
      "<item>",
      "<list>",
      "<li>",
      "<ul>"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which tag is used to create a table row?",
    options: [
      "<td>",
      "<tr>",
      "<th>",
      "<row>"
    ],
    answer: "B"
  },

  {
    category: "HTML",
    question: "Which tag is used to create a table data cell?",
    options: [
      "<td>",
      "<tr>",
      "<cell>",
      "<data>"
    ],
    answer: "A"
  },

  {
    category: "HTML",
    question: "Which tag is used for a table heading cell?",
    options: [
      "<thead>",
      "<heading>",
      "<th>",
      "<tr>"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which HTML tag is used to create a form?",
    options: [
      "<input>",
      "<form>",
      "<fieldset>",
      "<data>"
    ],
    answer: "B"
  },

  {
    category: "HTML",
    question: "Which input type is used for an email address?",
    options: [
      "text",
      "mail",
      "email",
      "email-input"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which input type hides the entered characters?",
    options: [
      "hidden",
      "password",
      "secure",
      "secret"
    ],
    answer: "B"
  },

  {
    category: "HTML",
    question: "Which attribute makes an input field mandatory?",
    options: [
      "required",
      "mandatory",
      "must",
      "validate"
    ],
    answer: "A"
  },

  {
    category: "HTML",
    question: "Which tag is used to create a line break?",
    options: [
      "<break>",
      "<lb>",
      "<br>",
      "<newline>"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which tag contains metadata and links to CSS files?",
    options: [
      "<body>",
      "<main>",
      "<head>",
      "<meta>"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which tag contains the visible content of a webpage?",
    options: [
      "<head>",
      "<body>",
      "<main>",
      "<content>"
    ],
    answer: "B"
  },

  {
    category: "HTML",
    question: "Which HTML5 element is used for navigation links?",
    options: [
      "<navigate>",
      "<navigation>",
      "<nav>",
      "<links>"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which HTML5 element represents the main content of a document?",
    options: [
      "<main>",
      "<content>",
      "<section>",
      "<primary>"
    ],
    answer: "A"
  },

  {
    category: "HTML",
    question: "Which tag is used to embed a video?",
    options: [
      "<media>",
      "<movie>",
      "<video>",
      "<mp4>"
    ],
    answer: "C"
  },

  {
    category: "HTML",
    question: "Which tag is used to create a dropdown list?",
    options: [
      "<dropdown>",
      "<select>",
      "<option-list>",
      "<list>"
    ],
    answer: "B"
  },

  {
    category: "HTML",
    question: "Which tag defines an option inside a select element?",
    options: [
      "<choice>",
      "<select-option>",
      "<option>",
      "<item>"
    ],
    answer: "C"
  },


  // ==========================================
  // CSS - 25 QUESTIONS
  // ==========================================

  {
    category: "CSS",
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which CSS property changes text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "foreground"
    ],
    answer: "C"
  },

  {
    category: "CSS",
    question: "Which CSS property changes the background color?",
    options: [
      "color",
      "background-color",
      "bg-color",
      "background"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property changes the font size?",
    options: [
      "text-size",
      "font-size",
      "size",
      "font"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property makes text bold?",
    options: [
      "font-style",
      "font-weight",
      "text-bold",
      "font-bold"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property is used to center text?",
    options: [
      "align-text",
      "text-align",
      "text-center",
      "align"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which symbol is used to select an element by ID?",
    options: [
      ".",
      "#",
      "*",
      "@"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which symbol is used to select elements by class?",
    options: [
      "#",
      ".",
      "*",
      "$"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which selector selects all elements?",
    options: [
      "#",
      ".",
      "*",
      "all"
    ],
    answer: "C"
  },

  {
    category: "CSS",
    question: "Which property controls the space inside an element?",
    options: [
      "margin",
      "padding",
      "spacing",
      "inside-space"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property controls the space outside an element?",
    options: [
      "padding",
      "margin",
      "outside",
      "spacing"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property is used to change the width of an element?",
    options: [
      "size",
      "element-width",
      "width",
      "box-width"
    ],
    answer: "C"
  },

  {
    category: "CSS",
    question: "Which property is used to change the height of an element?",
    options: [
      "height",
      "element-height",
      "size-height",
      "box-height"
    ],
    answer: "A"
  },

  {
    category: "CSS",
    question: "Which display value activates Flexbox?",
    options: [
      "display: flex",
      "display: box",
      "display: flexbox",
      "position: flex"
    ],
    answer: "A"
  },

  {
    category: "CSS",
    question: "Which property controls the direction of flex items?",
    options: [
      "flex-direction",
      "direction-flex",
      "flex-flow-direction",
      "item-direction"
    ],
    answer: "A"
  },

  {
    category: "CSS",
    question: "Which property aligns flex items along the main axis?",
    options: [
      "align-items",
      "justify-content",
      "text-align",
      "place-items"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property aligns flex items along the cross axis?",
    options: [
      "justify-content",
      "align-items",
      "align-content",
      "cross-align"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property creates rounded corners?",
    options: [
      "corner-radius",
      "border-round",
      "border-radius",
      "radius"
    ],
    answer: "C"
  },

  {
    category: "CSS",
    question: "Which property adds a shadow around an element?",
    options: [
      "element-shadow",
      "box-shadow",
      "shadow-box",
      "border-shadow"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property changes the transparency of an element?",
    options: [
      "transparent",
      "opacity",
      "visibility",
      "alpha"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property changes the typeface of text?",
    options: [
      "font-family",
      "font-type",
      "text-family",
      "typeface"
    ],
    answer: "A"
  },

  {
    category: "CSS",
    question: "Which property controls how an element is positioned?",
    options: [
      "position",
      "place",
      "element-position",
      "location"
    ],
    answer: "A"
  },

  {
    category: "CSS",
    question: "Which position value keeps an element fixed relative to the viewport?",
    options: [
      "absolute",
      "relative",
      "fixed",
      "sticky"
    ],
    answer: "C"
  },

  {
    category: "CSS",
    question: "Which CSS rule is used for responsive design based on screen size?",
    options: [
      "@responsive",
      "@media",
      "@screen",
      "@device"
    ],
    answer: "B"
  },

  {
    category: "CSS",
    question: "Which property controls the stacking order of positioned elements?",
    options: [
      "stack",
      "layer",
      "z-index",
      "order-index"
    ],
    answer: "C"
  },


  // ==========================================
  // JAVASCRIPT - 50 QUESTIONS
  // ==========================================

  {
    category: "JavaScript",
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: [
      "const",
      "let",
      "var",
      "static"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "Which keyword declares a variable that cannot be reassigned?",
    options: [
      "let",
      "var",
      "const",
      "fixed"
    ],
    answer: "C"
  },

  {
    category: "JavaScript",
    question: "What is the output of 10 + 5?",
    options: [
      "15",
      "105",
      "10",
      "5"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of 20 - 7?",
    options: [
      "12",
      "13",
      "14",
      "27"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of 6 * 4?",
    options: [
      "10",
      "20",
      "24",
      "28"
    ],
    answer: "C"
  },

  {
    category: "JavaScript",
    question: "What is the output of 20 / 5?",
    options: [
      "2",
      "4",
      "5",
      "10"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of 10 % 3?",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of 2 ** 4?",
    options: [
      "6",
      "8",
      "12",
      "16"
    ],
    answer: "D"
  },

  {
    category: "JavaScript",
    question: "What is the value of 5 + 3 * 2?",
    options: [
      "16",
      "11",
      "13",
      "10"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of 10 > 5?",
    options: [
      "true",
      "false",
      "10",
      "5"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of 5 === '5'?",
    options: [
      "true",
      "false",
      "5",
      "undefined"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of 5 == '5'?",
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the data type of the value true?",
    options: [
      "String",
      "Number",
      "Boolean",
      "Object"
    ],
    answer: "C"
  },

  {
    category: "JavaScript",
    question: "What is the data type of 25?",
    options: [
      "String",
      "Number",
      "Boolean",
      "Integer"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the data type of 'Hello'?",
    options: [
      "Text",
      "String",
      "Character",
      "Word"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the result of Boolean(0)?",
    options: [
      "true",
      "false",
      "0",
      "undefined"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the result of Number('25')?",
    options: [
      "'25'",
      "25",
      "NaN",
      "undefined"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the result of parseInt('10.5')?",
    options: [
      "10",
      "10.5",
      "11",
      "NaN"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of 'Hello'.length?",
    options: [
      "4",
      "5",
      "6",
      "undefined"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of [1, 2, 3].length?",
    options: [
      "2",
      "3",
      "4",
      "1"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "Which method adds an element to the end of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "add()"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "Which method removes the last element of an array?",
    options: [
      "remove()",
      "shift()",
      "pop()",
      "delete()"
    ],
    answer: "C"
  },

  {
    category: "JavaScript",
    question: "Which method removes the first element of an array?",
    options: [
      "pop()",
      "shift()",
      "removeFirst()",
      "deleteFirst()"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "Which method adds elements to the beginning of an array?",
    options: [
      "push()",
      "addFirst()",
      "unshift()",
      "prepend()"
    ],
    answer: "C"
  },

  {
    category: "JavaScript",
    question: "What is the output of [1, 2, 3].includes(2)?",
    options: [
      "true",
      "false",
      "2",
      "undefined"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What does Array.isArray([]) return?",
    options: [
      "true",
      "false",
      "Array",
      "undefined"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of Math.max(10, 20, 5)?",
    options: [
      "5",
      "10",
      "20",
      "35"
    ],
    answer: "C"
  },

  {
    category: "JavaScript",
    question: "What is the output of Math.min(10, 20, 5)?",
    options: [
      "5",
      "10",
      "20",
      "0"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of Math.floor(4.9)?",
    options: [
      "4",
      "5",
      "4.9",
      "3"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of Math.ceil(4.1)?",
    options: [
      "4",
      "5",
      "4.1",
      "3"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of Math.round(4.6)?",
    options: [
      "4",
      "5",
      "4.6",
      "6"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of 2 + '3'?",
    options: [
      "5",
      "23",
      "6",
      "NaN"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of '10' - 2?",
    options: [
      "102",
      "8",
      "10",
      "NaN"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of 10 / 2 + 3?",
    options: [
      "8",
      "6",
      "10",
      "13"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of 10 % 4?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of 3 * 4 + 2?",
    options: [
      "14",
      "20",
      "18",
      "12"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of 20 / 4 * 2?",
    options: [
      "2",
      "5",
      "10",
      "40"
    ],
    answer: "C"
  },

  {
    category: "JavaScript",
    question: "What is the output of 5 > 3 && 10 > 5?",
    options: [
      "true",
      "false",
      "5",
      "10"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of true || false?",
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of !true?",
    options: [
      "true",
      "false",
      "1",
      "0"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of typeof 100?",
    options: [
      "number",
      "integer",
      "string",
      "object"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the output of typeof 'JavaScript'?",
    options: [
      "text",
      "string",
      "word",
      "character"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the output of typeof true?",
    options: [
      "boolean",
      "bool",
      "true",
      "logical"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.string()"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "Which method selects an element by its ID?",
    options: [
      "getElementById()",
      "getById()",
      "queryId()",
      "selectId()"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "Which method selects the first element matching a CSS selector?",
    options: [
      "querySelector()",
      "select()",
      "getSelector()",
      "findElement()"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "Which event occurs when a user clicks an element?",
    options: [
      "change",
      "hover",
      "click",
      "submit"
    ],
    answer: "C"
  },

  {
    category: "JavaScript",
    question: "Which method is used to attach an event handler?",
    options: [
      "addEventListener()",
      "addEvent()",
      "eventListener()",
      "attachEventHandler()"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What does setTimeout() do?",
    options: [
      "Repeats code forever",
      "Runs code after a specified delay",
      "Stops JavaScript",
      "Runs code immediately"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "Which keyword is used to create a function?",
    options: [
      "function",
      "func",
      "define",
      "method"
    ],
    answer: "A"
  },

  {
    category: "JavaScript",
    question: "What is the result of 7 + 8 * 2?",
    options: [
      "30",
      "23",
      "22",
      "24"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the result of (7 + 8) * 2?",
    options: [
      "23",
      "30",
      "22",
      "28"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the result of 100 - 25 * 2?",
    options: [
      "150",
      "50",
      "75",
      "25"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the result of 50 / 5 + 10?",
    options: [
      "4",
      "15",
      "20",
      "60"
    ],
    answer: "B"
  },

  {
    category: "JavaScript",
    question: "What is the result of 3 ** 3?",
    options: [
      "6",
      "9",
      "27",
      "81"
    ],
    answer: "C"
  },

  {
    category: "JavaScript",
    question: "What is the result of 17 % 5?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "B"
  }
];

// ==========================================
// VARIABLES
// ==========================================

let currentQuestion = 0;
let totalScore = 0;

let htmlScore = 0;
let cssScore = 0;
let jsScore = 0;


// ==========================================
// STUDENT FORM
// ==========================================

studentForm.addEventListener("submit", function (e) {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Course:", course);

  // Hide form
  studentForm.style.display = "none";

  // Show quiz
  quizSection.style.display = "block";

  // Load first question
  loadQuestion();
});


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

  const current = questions[currentQuestion];

  questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  question.textContent = current.question;

  optionLabels.forEach(function (label, index) {
    label.textContent = current.options[index];
  });

  // Remove previous selected option
  options.forEach(function (option) {
    option.checked = false;
  });

  // Score
  scoreDisplay.textContent = `Score: ${totalScore}`;

  // Progress
  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  progressBar.style.width = `${progress}%`;

  // Last question
  if (currentQuestion === questions.length - 1) {
    nextBtn.textContent = "Submit Quiz";
  } else {
    nextBtn.textContent = "Next Question";
  }
}


// ==========================================
// NEXT / SUBMIT
// ==========================================

nextBtn.addEventListener("click", function () {

  let selectedAnswer = null;

  options.forEach(function (option) {

    if (option.checked) {
      selectedAnswer = option.value;
    }

  });

  // No answer
  if (selectedAnswer === null) {
    alert("Please select an answer!");
    return;
  }


  // ========================================
  // CHECK ANSWER
  // ========================================

  if (selectedAnswer === questions[currentQuestion].answer) {

    totalScore++;

    if (questions[currentQuestion].category === "HTML") {
      htmlScore++;
    }

    else if (questions[currentQuestion].category === "CSS") {
      cssScore++;
    }

    else if (questions[currentQuestion].category === "JavaScript") {
      jsScore++;
    }

  }


  // Move to next question
  currentQuestion++;


  // More questions
  if (currentQuestion < questions.length) {

    loadQuestion();

  }

  // Quiz completed
  else {

    showResult();

  }

});


// ==========================================
// RESULT
// ==========================================

function showResult() {

  const totalQuestions = questions.length;

  const wrongAnswers =
    totalQuestions - totalScore;

  const percentage =
    Math.round((totalScore / totalQuestions) * 100);


  quizSection.innerHTML = `

    <div class="result">

      <h2>🎉 Quiz Completed!</h2>

      <p>
        <strong>Total Questions:</strong>
        ${totalQuestions}
      </p>

      <hr>

      <h3>Subject Wise Result</h3>

      <p>
        HTML:
        <strong>${htmlScore} / 25</strong>
      </p>

      <p>
        CSS:
        <strong>${cssScore} / 25</strong>
      </p>

      <p>
        JavaScript:
        <strong>${jsScore} / 50</strong>
      </p>

      <hr>

      <p>
        Correct Answers:
        <strong>${totalScore}</strong>
      </p>

      <p>
        Wrong Answers:
        <strong>${wrongAnswers}</strong>
      </p>

      <h2>
        Score: ${totalScore} / 100
      </h2>

      <h2>
        Percentage: ${percentage}%
      </h2>

    </div>

  `;
}
