// array of stems
const stems = [
    "cap",
    "lay",
    "pal",
    "hin",
    "ett",
    "edi",
    "ape",
    "iss",
    "ate",
    "est",
    "oon",
    "ati",
];

const message = document.getElementById("message");
const stem = document.querySelector("stem");
const controls = document.querySelector(".controls-container");
const startButton = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");

let randomWord = "";
let winCount = 0, lossCOunt = 0;

// Generate random value
const generateRandomValue = (array) => 
Math.floor(Math.random() * array.length);

// Start game
startButton.addEventListener("click", () => {
    controls.classList.add("hide");
    init();
});

// Stop game
const stopGame = function() {
    controls.classList.remove("hide");
};

// generate word
const generateWord = () => {

};

// initial function
const init = () => {
    winCount = 0;
    lossCount = 5;
    randomWord = "";
    word.innerText = "";
    message.innerText = "";
    userInpSection.innerHTML = "";
    letterContainer.classList.add("hide");
    letterContainer.innterHTML = "";
    generateWord();


};
