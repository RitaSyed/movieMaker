const data = require('./data');
const movieElPrice = document.getElementById('movieEl-price');
const OutputDomString = () => {
  let domString = '';
  for (let i = 0; i < data.getCheckedItem().length; i++) {
    domString += `<div class="well well-sm">`;
    domString +=    `<h5>${data.getCheckedItem()[i].name}: $${data.getCheckedItem()[i].cost}</h5>`;
    domString += `</div>`;
  }
  return domString;
};
const printCheckedItemsToDom = () => {
  movieElPrice.innerHTML = OutputDomString();
};

module.exports = printCheckedItemsToDom;
