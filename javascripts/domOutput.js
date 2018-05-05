// const printBudgetToDom = require('./domOutput');
const data = require('./data');
// const checkedItem = data.getCheckedItem();
// const input = data.getBudget();
// const events = require('./events');
const movieElPrice = document.getElementById('movieEl-price');
// const inputNumber = input.value;
// const outputHolder = document.getElementById('output-holder');
// console.log(inputNumber);
// console.log(inputU);
const OutputDomString = () => {
  // console.log('data.getCheckedItem()', data.getCheckedItem()[0]);
  // console.log('checkedItem', checkedItem);
  let domString = '';
  // domString += `<div>`;
  domString += `<div class="well well-sm">`;
  domString +=    `<h5>${data.getCheckedItem()[0].name}: $${data.getCheckedItem()[0].cost}</h5>`;
  domString += `</div>`;
  return domString;
};
const printCheckedItemsToDom = () => {
  movieElPrice.innerHTML += OutputDomString();
};

module.exports = printCheckedItemsToDom;
