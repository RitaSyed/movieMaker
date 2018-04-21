// const printBudgetToDom = require('./domOutput');
const eventsI = require('./events');
const printcheckedItemsToDom = require('./domOutput');
const setBudget = document.getElementById('set-budget');
const events = () => {
  setBudget.addEventListener('click', buttonInitializer);
};

// const input = document.getElementById('input');

const buttonInitializer = (e) => {
  // const userInput = input.value;
  // console.log(userInput);
  // console.log(eventsI.checkedItems(e));
  console.log('new');
  printcheckedItemsToDom(eventsI.checkedItems(e));
};

module.exports = events;
