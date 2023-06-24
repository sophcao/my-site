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
const stem = document.querySelector(".stem-ref");
const controls = document.querySelector(".controls-container");
const startButton = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");
const wordInput = document.getElementById("word-input");
const enterButton = document.getElementById("enter-btn");

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
const generateStem = () => {
    letterContainer.classList.remove("hide");
    userInpSection.innerText = "";
    randomWord = stems[generateRandomValue(stems)];
    stemRef.innerHTML = 
    '<div id="stem"> <span>Stem: </span>${randomWord}</div>';
    console.log(randomWord);
};

// Enter button click event handler
enterButton.addEventListener("enter", () => {
  const typedWord = wordInput.value.trim().toLowerCase();
  if (typedWord.length > 0) {
    // Check if the typed word matches the randomWord
    if (typedWord.includes(randomWord)) {
      message.innerText = "Correct!";
      winCount++;
      // Remove the word from the input box
      wordInput.value = "";
    } else {
      message.innerText = "Incorrect!";
      lossCount--;
    }
    // Update the win/loss count
    resultText.innerText = `Wins: ${winCount} | Losses: ${lossCount}`;
    // Check if the game is over
    if (lossCount === 0) {
      stopGame();
    }
  }
});


// initial function
const init = () => {
    winCount = 0;
    lossCount = 5;
    randomWord = "";
    
    generateStem();

};


