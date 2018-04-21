// const printBudgetToDom = require('./domOutput');
// const data = require('./data');
// const checkedItems = data.getCheckedItems();
// const input = data.getBudget();
// const events = require('./events');
// const input = document.getElementById('budget-input');
// const inputNumber = input.value;
const outputHolder = document.getElementById('output-holder');
// console.log(inputNumber);
// console.log(inputU);
const cartDomString = (checkedItems, budget) => {
  let domString = '';
  domString += `<div class="col-xs-8 col-xs-offset-2">`;
  domString += `<table class="table">`;
  domString +=   `<tr>`;
  domString +=     `<th>${budget}</th>`;
  // domString +=     `<th>Price</th>`;
  // domString +=     `<th>Quantity</th>`;
  // domString +=     `<th></th>`;
  domString +=   `</tr>`;
  checkedItems.forEach((item) => {
    domString +=   `<tr>`;
    domString +=     `<td>${item.name}</td>`;
    domString +=     `<td>$${item.cost}</td>`;
    // domString +=     `<td>${item.purchaseNum}</td>`;
    // domString +=     `<td><button class="btn-danger"><span class="glyphicon glyphicon-trash"></span></button></td>`;
    domString +=   `</tr>`;
  });
  domString += `</table>`;
  // domString += getTotals(items);
  domString += `</div>`;
  // console.log(inputU.value);
  return domString;
};
const printcheckedItemsToDom = (checkedItems, budget) => {
  outputHolder.innerHTML = cartDomString(checkedItems, budget);
};

module.exports = printcheckedItemsToDom;
