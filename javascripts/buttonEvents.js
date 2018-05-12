const data = require('./data');
const itemCheckbox = document.getElementsByClassName('add-item');
const setBudget = document.getElementById('set-budget-btn');
const inputField = document.getElementById('budget-input');
const budget = document.getElementById('budget');

const buttonInitializer = (e) => {
  setBudgetData();
  uncheckAndUnableCheckboxes();
  clearInputField();
  console.log('btn');
};

const keypressInitializer = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    setBudgetData();
    uncheckAndUnableCheckboxes();
    clearInputField();
    console.log('keypress');
  }
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
  const budgetNum = budget.innerHTML = inputNum;
  data.setBudget(budgetNum);
};
const buttonEvents = () => {
  setBudget.addEventListener('click', buttonInitializer);
  inputField.addEventListener('keypress', keypressInitializer);
};

module.exports = buttonEvents;
