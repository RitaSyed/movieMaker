// const printBudgetToDom = require('./domOutput');
const data = require('./data');
const printcheckedItemsToDom = require('./domOutput');
const setBudget = document.getElementById('set-budget');
const events = () => {
  setBudget.addEventListener('click', buttonInitializer);
};

// const input = document.getElementById('input');

const buttonInitializer = (e) => {
  const input = document.getElementById('budget-input');

  const budget = input.value;
  // console.log(userInput);
  // console.log(eventsI.checkedItems(e));
  console.log('new');
  printcheckedItemsToDom(data.getCheckedItems(), budget);
};

module.exports = events;
