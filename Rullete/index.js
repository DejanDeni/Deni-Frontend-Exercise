(function () {
  const win = (rollOutcomeElement, currentBalanceElement, userAmounts) => {
    const winText = 'YOU WIN!';
    rollOutcomeElement.innerText = winText;
    rollOutcomeElement.style.color = 'green';
    const amountWon = userAmounts.betAmount;
    userAmounts.currentBalance = userAmounts.currentBalance + amountWon;
    currentBalanceElement.innerText = userAmounts.currentBalance;
  };

  const lose = (rollOutcomeElement, currentBalanceElement, userAmounts) => {
    const loseText = 'YOU LOSE!';
    rollOutcomeElement.innerText = loseText;
    rollOutcomeElement.style.color = 'red';
    const amountLost = userAmounts.betAmount;
    userAmounts.currentBalance = userAmounts.currentBalance - amountLost;
    currentBalanceElement.innerText = userAmounts.currentBalance;
  };

  // get DOM elements
  const incrementElement = document.getElementById('increment');
  const decrementElement = document.getElementById('decrement');
  const betAmountElement = document.getElementById('bet-amount');
  const currentBalanceElement = document.getElementById('current-balance');
  const rollButton = document.getElementById('roll-button');
  const currentNumberRollElement = document.getElementById('current-number-roll');
  const rollOutcomeElement = document.getElementById('roll-outcome');
  const blackRadioButton = document.getElementById('black-radio');
  const redRadioButton = document.getElementById('red-radio');

  // declare variables and set initial values

  const userAmounts = { betAmount: 0, currentBalance: 1000 };
  currentBalanceElement.innerText = userAmounts.currentBalance;
  let selectedColor = 'black';
  blackRadioButton.checked = true;

  // add event listeners
  incrementElement.addEventListener('click', () => {
    if (userAmounts.currentBalance === 0) {
      return;
    }

    userAmounts.betAmount = userAmounts.betAmount + 50;
    betAmountElement.innerText = userAmounts.betAmount;
    userAmounts.currentBalance = userAmounts.currentBalance - 50;
    currentBalanceElement.innerText = userAmounts.currentBalance;
  });

  decrementElement.addEventListener('click', () => {
    if (userAmounts.betAmount === 0) {
      return;
    }

    userAmounts.betAmount = userAmounts.betAmount - 50;
    betAmountElement.innerText = userAmounts.betAmount;
    userAmounts.currentBalance = userAmounts.currentBalance + 50;
    currentBalanceElement.innerText = userAmounts.currentBalance;
  });

  blackRadioButton.addEventListener('click', () => {
    selectedColor = 'black';
  });
  redRadioButton.addEventListener('click', () => {
    selectedColor = 'red';
  });

  rollButton.addEventListener('click', ev => {
    const newRollValue = Math.floor(Math.random() * 37);
    currentNumberRollElement.value = newRollValue;

    if (newRollValue === 0) {
      // 0
      currentNumberRollElement.style.color = 'green';
      lose(rollOutcomeElement, currentBalanceElement, userAmounts);
    } else if (newRollValue % 2 === 0) {
      // parni - red
      currentNumberRollElement.style.color = 'red';
      if (selectedColor === 'red') {
        // we win
        win(rollOutcomeElement, currentBalanceElement, userAmounts);
      } else {
        // we lose
        lose(rollOutcomeElement, currentBalanceElement, userAmounts);
      }
    } else {
      // neparni - black
      currentNumberRollElement.style.color = 'black';
      if (selectedColor === 'black') {
        // we win
        win(rollOutcomeElement, currentBalanceElement, userAmounts);
      } else {
        // we lose
        lose(rollOutcomeElement, currentBalanceElement, userAmounts);
      }
    }
  });
})();
