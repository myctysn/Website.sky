// Coin System
let coinBalance = 100;

function updateCoinBalance() {
  document.getElementById('coin-balance').textContent = coinBalance;
}

// Recharge Coins
document.getElementById('recharge-btn').addEventListener('click', () => {
  coinBalance += 100;
  updateCoinBalance();
});

// Mini Games Section
document.querySelectorAll('.play-btn').forEach(button => {
  button.addEventListener('click', () => {
    const gameCard = button.closest('.game-card');
    const cost = parseInt(gameCard.getAttribute('data-cost'));

    if (coinBalance >= cost) {
      coinBalance -= cost;
      updateCoinBalance();
      const gameContainer = gameCard.querySelector('.game-container');
      gameContainer.style.display = 'block'; // Show the game container
      button.style.display = 'none'; // Hide the Play button
    } else {
      alert('Insufficient coins. Please recharge.');
    }
  });
});

// Reset Buttons
document.querySelectorAll('.reset-btn').forEach(button => {
  button.addEventListener('click', () => {
    const gameContainer = button.closest('.game-container');
    gameContainer.style.display = 'none'; // Hide the game container
    const playButton = gameContainer.closest('.game-card').querySelector('.play-btn');
    playButton.style.display = 'block'; // Show the Play button again
  });
});

// Tic-Tac-Toe Game
const ticTacToeCells = document.querySelectorAll('.tic-tac-toe-grid .cell');
let currentPlayer = 'X';
let gameActive = true;

ticTacToeCells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (gameActive && !cell.textContent) {
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      ticTacToeCells[a].textContent &&
      ticTacToeCells[a].textContent === ticTacToeCells[b].textContent &&
      ticTacToeCells[a].textContent === ticTacToeCells[c].textContent
    ) {
      gameActive = false;
      document.getElementById('tic-tac-toe-result').textContent = `Player ${ticTacToeCells[a].textContent} wins!`;
      break;
    }
  }
}

// Reset Tic-Tac-Toe Game
document.querySelector('#tic-tac-toe .reset-btn').addEventListener('click', () => {
  ticTacToeCells.forEach(cell => (cell.textContent = ''));
  gameActive = true;
  document.getElementById('tic-tac-toe-result').textContent = '';
});

// Guess the Number Game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guess-btn').addEventListener('click', () => {
  const guessInput = document.getElementById('guess-input');
  const guessResult = document.getElementById('guess-result');
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) {
    guessResult.textContent = 'Please enter a valid number.';
    return;
  }

  attempts++;
  if (userGuess === randomNumber) {
    guessResult.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
  } else if (userGuess < randomNumber) {
    guessResult.textContent = 'Too low! Try again.';
  } else {
    guessResult.textContent = 'Too high! Try again.';
  }
});

// Reset Guess the Number Game
document.querySelector('#guess-the-number .reset-btn').addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guess-input').value = '';
  document.getElementById('guess-result').textContent = '';
});
