// Coin System
let coinBalance = 100;

function updateCoinBalance() {
  document.getElementById('coin-balance').textContent = coinBalance;
}

document.getElementById('recharge-btn').addEventListener('click', () => {
  coinBalance += 100;
  updateCoinBalance();
});

// Mini Games
document.querySelectorAll('.play-btn').forEach(button => {
  button.addEventListener('click', () => {
    const gameCard = button.closest('.game-card');
    const cost = parseInt(gameCard.getAttribute('data-cost'));

    if (coinBalance >= cost) {
      coinBalance -= cost;
      updateCoinBalance();
      alert(`You have successfully played the game! ${cost} coins deducted.`);
    } else {
      alert('Insufficient coins. Please recharge.');
    }
  });
});

// EMI Calculator
document.getElementById('emi-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const loanAmount = parseFloat(document.getElementById('loan-amount').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value);
  const loanTenure = parseFloat(document.getElementById('loan-tenure').value);

  const monthlyInterest = interestRate / 1200;
  const emi = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, loanTenure)) / (Math.pow(1 + monthlyInterest, loanTenure) - 1);

  document.getElementById('emi-result').textContent = `Your EMI is: ₹${emi.toFixed(2)}`;
});

// Loan Calculator
document.getElementById('loan-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);

  const interest = (principal * rate * time) / 100;
  const totalAmount = principal + interest;

  document.getElementById('loan-result').textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;
});