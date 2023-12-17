const getRandomWord = (wordList) => wordList[Math.floor(Math.random() * wordList.length)];

const checkGuess = (guess, targetWord, attemptsLeft) => {
    if (guess === targetWord) {
        alert("Congratulations! You guessed the word correctly.");
        return true;
    } else {
        alert(`Incorrect guess. You have ${attemptsLeft - 1} attempts left.`);
        return false;
    }
};

const playWordle = () => {
    const wordList = ["apple", "banana", "orange", "grape", "lemon"]; 
    const targetWord = getRandomWord(wordList);
    let attempts = 5;

    while (attempts > 0) {
        const userGuess = prompt("Enter your guess:");
        const isCorrect = checkGuess(userGuess, targetWord, attempts);

        if (isCorrect) {
            break;
        }

        attempts--;
    }

    if (attempts === 0) {
        alert("Sorry, you've run out of attempts. The word was " + targetWord + ".");
    }
};

playWordle();