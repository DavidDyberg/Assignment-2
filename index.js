let words = [
    "HOODIE",
    "TIGER",
    "BRAINSTORM",
    "CAVA",
    "TORNADO",
    "SKELETON",
    "GOBLIN",
]

let alfabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
]

let word = words[Math.floor(Math.random()*words.length)];
let lifes = word.length;

let answerArray = [];
for( let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let cancel = "NO";
let remainingLetters = word.length;

while (remainingLetters > 0) {
    
    if(lifes == 0) {
    break;
   } 
    
    let userGuess = prompt("Welcome to Hangman. Guess the right word to win. Enter a letter, it must be capitalized" + "\n" + answerArray.join(" ") + "\n" + ('You have ' + lifes + ' lives left.'));

    if (userGuess === null) {
        cancel = "YES";
        break;
    } 
    
    else if (userGuess.length !== 1) {
        alert("Enter just one letter each time!");
    }

    else if (!alfabet.includes(userGuess)) {
        alert("Not a valid letter!")
    } 
    
    else if (!word.includes(userGuess)) {
        lifes--;
        alert('Wrong letter! One life lost.');
    }
    
    else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === userGuess) {
                answerArray[j] = userGuess;
                remainingLetters--;
            }
        }
    }  
}

if(lifes == 0) {
    alert("You have lost. Looser!")
} else if (cancel === "NO") {
    alert(answerArray.join(" "));
    alert("Good job! You win! The answer was " + word);
} else {
    alert("HA!, Do you give up so easily??? Try again!")
}