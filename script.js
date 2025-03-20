// Coin System
let coinBalance = 100;

function updateCoinBalance() {
  document.getElementById('coin-balance').textContent = coinBalance;
}

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
      gameContainer.style.display = 'block';
    } else {
      alert('Insufficient coins. Please recharge.');
    }
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

// Reset Buttons
document.querySelectorAll('.reset-btn').forEach(button => {
  button.addEventListener('click', () => {
    const gameContainer = button.closest('.game-container');
    gameContainer.style.display = 'none';
    if (gameContainer.id === 'tic-tac-toe') {
      ticTacToeCells.forEach(cell => (cell.textContent = ''));
      gameActive = true;
      document.getElementById('tic-tac-toe-result').textContent = '';
    }
  });
});
