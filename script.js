const quiz = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: "Jupiter"
    },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    document.getElementById("question").innerHTML = quiz[currentQuestion].question;
    document.getElementById("answer-options").innerHTML = "";
    for (let i = 0; i < quiz[currentQuestion].options.length; i++) {
        const option = quiz[currentQuestion].options[i];
        const optionHTML = `<li><label>${option}</label></li>`;
        document.getElementById("answer-options").innerHTML += optionHTML;
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked").value;
    if (selectedOption === quiz[currentQuestion].answer) {
        score++;
    }
}

function submitQuiz() {
    checkAnswer();
    if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        document.getElementById("result").innerHTML = `You scored ${score} out of ${quiz.length}!`;
    }
}

document.getElementById("submit-btn").addEventListener("click", submitQuiz);
showQuestion();