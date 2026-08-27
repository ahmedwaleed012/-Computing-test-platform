const correctAnswers = [

"C",
"B",
"B",
"B",
"B",
"C",
"B",
"A",
"B",
"B",
"C",
"B",
"C",
"B",
"C"

];

let questions = [];
let currentQuestion = 0;
let score = 0;


// Load JSON
fetch("questions.json")
    .then(response => response.json())
    .then(data => {

        questions = data.questions;

        showQuestion();

    })
    .catch(error => {
        console.log("JSON ERROR:", error);
    });


// Show current question
function showQuestion() {

    const question = questions[currentQuestion];

    console.log("Question:", currentQuestion + 1);

    document.getElementById("question-container").textContent =
        question.question;


    document.getElementById("label1").textContent =
        question.options[0];

    document.getElementById("label2").textContent =
        question.options[1];

    document.getElementById("label3").textContent =
        question.options[2];

    document.getElementById("label4").textContent =
        question.options[3];


    // Remove previous selection
    document.querySelectorAll('input[name="answer"]')
        .forEach(input => {
            input.checked = false;
        });
}


// Next button
document.getElementById("quiz-form").addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("NEXT CLICKED");


    // Get selected answer
    const selected = document.querySelector(
        'input[name="answer"]:checked'
    );


    if (!selected) {

        alert("Please choose an answer!");

        return;
    }


    console.log("Selected:", selected.value);


    // Check answer
    if (selected.value === correctAnswers[currentQuestion]) {

        score++;

        console.log("Correct!");

    } else {

        console.log("Wrong!");

    }


    // Move to next question
    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        document.getElementById("question-container").textContent =
            `Quiz Finished! Your Score: ${score}/${questions.length}`;

        document.getElementById("answers-container").style.display =
            "none";

        document.getElementById("next-btn").style.display =
            "none";
    }

});