// const events = require('./events');
// console.log('checkedItems', checkedItems());
const outputHolder = document.getElementById('output-holder');
// console.log(checkedItems());
const cartDomString = (checkedItems) => {
  let domString = '';
  domString += `<div class="col-xs-8 col-xs-offset-2">`;
  domString += `<table class="table">`;
  // domString +=   `<tr>`;
  // domString +=     `<th>Name</th>`;
  // domString +=     `<th>Price</th>`;
  // domString +=     `<th>Quantity</th>`;
  // domString +=     `<th></th>`;
  // domString +=   `</tr>`;
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
  return domString;
};
const printcheckedItemsToDom = (checkedItems) => {
  // const cartItems = data.getCart();
  // console.log('cartItem', cartItems);
  outputHolder.innerHTML = cartDomString(checkedItems);
};

module.exports = printcheckedItemsToDom;
