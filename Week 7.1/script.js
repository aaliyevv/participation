document.addEventListener('DOMContentLoaded', function() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const player1Move = choices[Math.floor(Math.random() * choices.length)];
    const player2Move = choices[Math.floor(Math.random() * choices.length)];

    const player1Div = document.getElementById('player1');
    const player2Div = document.getElementById('player2');
    const resultDiv = document.getElementById('result');
    const smiley1 = document.getElementById('smiley1');
    const smiley2 = document.getElementById('smiley2');

    player1Div.textContent += player1Move;
    player2Div.textContent += player2Move;

    const winner = determineWinner(player1Move, player2Move);
    if (winner === 'Player 1') {
        resultDiv.textContent = "Player 1 wins";
        smiley1.classList.add('show');
    } else if (winner === 'Player 2') {
        resultDiv.textContent = "Player 2 wins";
        smiley2.classList.add('show');
    } else {
        resultDiv.textContent = "A Draw";
    }

    function determineWinner(move1, move2) {
        if (move1 === move2) return "Draw";
        if ((move1 === 'Rock' && move2 === 'Scissors') || 
            (move1 === 'Paper' && move2 === 'Rock') || 
            (move1 === 'Scissors' && move2 === 'Paper')) {
            return 'Player 1';
        }
        return 'Player 2';
    }
});