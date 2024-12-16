const questions = [
    {
        text: "...has spent all week comparing her political opponents to the most evil mass murderers in history... Now, on top of everything… calls our supporters 'garbage'",
        question: "Does the author persuade their audience by attacking the other candidate to gain credibility?",
        isLogical: true
    },
    {
        text: "Are the great principles of political freedom and of natural justice, embodied in that Declaration of Independence, extended to us?",
        question: "Is this an example of logical political rhetoric?",
        isLogical: true
    },
    {
        text: "Yet another empty promise—typical for a person that is all talk and no walk.",
        question: "Is this an example of logical political rhetoric?",
        isLogical: false
    },
    {
        text: "... has orchestrated the most egregious betrayal that any leader in American history has ever inflicted on our people…",
        question: "Does the author persuade their audience by attacking the other candidate to gain credibility?",
        isLogical: true
    },
    {
        text: " I am more than ever before convinced.... ...is not free because he is still chained to the lack of equal opportunities, and to the lack of recognition of his fundamental rights.",
        question: "Is this an example of logical political rhetoric?",
        isLogical: true
    },
    {
        text: "This guy doesn't care about you. He's not thinking about you at all.",
        question: "Is this an example of logical political rhetoric?",
        isLogical: false
    },
    {
        text: "... pretends to understand workers and the battles they face every day. Let’s not fall for the okey-doke: He was handed $400 million on a silver platter.",
        question: "Does the author persuade their audience by attacking the other candidate to gain credibility?",
        isLogical: true
    },
    {
        text: "See your Declaration Americans!!! Do you understand your own language?... ‘We hold these truths to be self-evident, that ALL MEN ARE CREATED EQUAL!!",
        question: "Is this an example of logical political rhetoric?",
        isLogical: true
    }

    
];

let currentQuestionIndex = 0;
let score = 0;

const postBox = document.getElementById("post-box");
const questionDisplay = document.getElementById("question");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    postBox.textContent = currentQuestion.text;
    questionDisplay.textContent = currentQuestion.question;
}

function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (userAnswer === currentQuestion.isLogical) {
        score += 10;
        //alert("Correct!");
    } else {
        //alert("Incorrect!");
    }
    updateScore();
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

// Update the score display
function updateScore() {
    scoreDisplay.textContent = `Points: ${score}`;
}

// End the game
function endGame() {
    postBox.textContent = "Game Over! Check within your group to see if you have the highest points!";
    questionDisplay.textContent = "";
    document.querySelector(".button-container").style.display = "none";
}

// Initialize the game
loadQuestion();