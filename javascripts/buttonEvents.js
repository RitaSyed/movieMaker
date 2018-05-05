const data = require('./data');
const itemCheckbox = document.getElementsByClassName('add-item');
const setBudget = document.getElementById('set-budget-btn');
const inputField = document.getElementById('budget-input');
const budget = document.getElementById('budget');

const buttonInitializer = (e) => {
  setBudgetData();
  // console.log(budget);
  // console.log(eventsI.checkedItems(e));
  console.log('new');
  uncheckAndUnableCheckboxes();
  clearInputField();
  // printcheckedItemsToDom(data.getCheckedItems(), budget);
};

const uncheckAndUnableCheckboxes = () => {
  for (let i = 0; i < itemCheckbox.length; i++) {
    itemCheckbox[i].removeAttribute('checked');
    itemCheckbox[i].removeAttribute('disabled');
  };
};

const clearInputField = () => {
  inputField.value = '';
};

const setBudgetData = () => {

  const inputNum = (inputField.value) * 1;
  // console.log(budget);
  const budgetNum = budget.innerHTML = inputNum;
  // printcheckedItemsToDom(checkedItems(), budget);
  data.setBudget(budgetNum);
  // console.log(budgetNum);
  // const initialBudget = data.getBudget();
  // return budgetNum;
};
const buttonEvents = () => {
  setBudget.addEventListener('click', buttonInitializer);
};

module.exports = buttonEvents;

// inputField.addEventListener('click', uncheckAndUnableCheckboxes);
// console.log(checkedItems());

// // const printBudgetToDom = require('./domOutput');
// const data = require('./data');
// const printcheckedItemsToDom = require('./domOutput');
// const setBudget = document.getElementById('set-budget');
// const events = () => {
//   setBudget.addEventListener('click', buttonInitializer);
// };

// // const input = document.getElementById('input');

// const buttonInitializer = (e) => {
//   const input = document.getElementById('budget-input');

//   const budget = input.value;
//   // console.log(userInput);
//   // console.log(eventsI.checkedItems(e));
//   console.log('new');
//   printcheckedItemsToDom(data.getCheckedItems(), budget);
// };

// module.exports = events;
