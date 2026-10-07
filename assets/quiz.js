import data from "../data/questions.json" with { type: "json" };

// Definitions

const questions = data 

const first = data.Kian[1]
const second = data.Kian[2]
const third = data.Kian[3]

const totalRound = 3; 
let currentRound= 0;
let currentCategory;
let score = 0;
let completedCategories = [];

const GameStatus = {
    NotStarted: "NotStarted",
    Kian: "Kian",
    Banana: "Banana",
    Hoku: "Hoku",
    Finished: "Finished"
    
};

//


// Seletores da DOM
const content = document.getElementById("content");
const result = document.getElementById ("result");
const buttonCategoryA = document.getElementById("A");
const buttonCategoryB = document.getElementById("B");
const buttonCategoryC = document.getElementById("C");
const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const buttons = document.getElementsByClassName("answer");



// Main game logic 
// Initial state 



function checkIfCorrect(round, answer) {
    const correctAnswer = data[currentCategory][round].Certas;

    if(correctAnswer == answer){
        return true;
    }
    return false;
}

let gameStatus = GameStatus.NotStarted;
    
if (gameStatus == GameStatus.NotStarted) {
    content.classList.add("hidden")
};

function showQuestion() {

    const categoriaKian = data.Kian;
    const categoriaBanana = data.Banana;
    const categoriaHoku = data.Hoku;

    if (currentCategory == GameStatus.Kian) {
        
        question.innerText = categoriaKian[currentRound].Pergunta;

        optionA.innerText = categoriaKian[currentRound].Respostas.A;
        optionB.innerText = categoriaKian[currentRound].Respostas.B;
        optionC.innerText = categoriaKian[currentRound].Respostas.C;
        optionD.innerText = categoriaKian[currentRound].Respostas.D;
    
    };


    if (currentCategory == GameStatus.Banana) {

        question.innerText = categoriaBanana[currentRound].Pergunta;

        optionA.innerText = categoriaBanana[currentRound].Respostas.A;
        optionB.innerText = categoriaBanana[currentRound].Respostas.B;
        optionC.innerText = categoriaBanana[currentRound].Respostas.C;
        optionD.innerText = categoriaBanana[currentRound].Respostas.D;

    };

    if (currentCategory == GameStatus.Hoku) {

        question.innerText = categoriaHoku[currentRound].Pergunta;

        optionA.innerText = categoriaHoku[currentRound].Respostas.A;
        optionB.innerText = categoriaHoku[currentRound].Respostas.B;
        optionC.innerText = categoriaHoku[currentRound].Respostas.C;
        optionD.innerText = categoriaHoku[currentRound].Respostas.D;

    };

}

function submitAnswer(answer) {
    const isCorrect = checkIfCorrect(currentRound, answer)

    if (isCorrect) { 
        score += 1;
    };

    console.log(isCorrect);

    moveNext();
}

function moveNext() {
    console.log(currentRound);
    currentRound += 1;
    
    if (currentRound > 3) {
        changeGameStatus(GameStatus.Finished);
        return;
    }
    showQuestion();
}

// Aqui fica a entrada do jogo

result.classList.add("hidden")

function changeGameStatus(status) {

    console.log("Status", status);

    if (status == GameStatus.Finished) {
        console.log("Game Over");
        content.classList.add("hidden");

        if (!completedCategories.includes(currentCategory)) {
            completedCategories.push(currentCategory);
        }

        updateCategoryButtons();

        if (completedCategories.length === 3) {

            const resultParagraph = document.querySelector("#result p");
            const resultDiv = document.getElementById("result");

            resultParagraph.innerText = `Você acertou ${score} perguntas no total!`;
            resultDiv.classList.remove("hidden");
        };

        return;
    };

    if(status != GameStatus.NotStarted) {
        content.classList.remove("hidden");
        result.classList.add("hidden");
    };
    
    gameStatus = status;
    currentCategory = status;
    currentRound = 1;

    showQuestion();
};

function updateCategoryButtons() {
    const buttonMapping = {
        [GameStatus.Kian]: document.getElementById("A"),
        [GameStatus.Banana]: document.getElementById("B"),
        [GameStatus.Hoku]: document.getElementById("C")
    };

    completedCategories.forEach(category => {

        const btn = buttonMapping[category];
            console.log("updateCategoryButtons", btn)
        if (btn) {
            btn.disabled = true; 
            btn.classList.add("locked");
        }
    });
};


// Listeners


buttonCategoryA.addEventListener("click", () => changeGameStatus(GameStatus.Kian));
buttonCategoryB.addEventListener("click", () => changeGameStatus(GameStatus.Banana));
buttonCategoryC.addEventListener("click", () => changeGameStatus(GameStatus.Hoku));

buttons[0].addEventListener("click", () => (submitAnswer("A")));
buttons[1].addEventListener("click", () => (submitAnswer("B")));
buttons[2].addEventListener("click", () => (submitAnswer("C")));
buttons[3].addEventListener("click", () => (submitAnswer("D")));



