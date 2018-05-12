const infoHolder = document.getElementById('info-holder');
const buttonEvents = require('./buttonEvents');
const checkboxEvents = require('./checkboxEvents');

const domString = (categories, movieElements) => {
  let domStrang = '';
  categories.forEach((category) => {
    domStrang += `<div id="${category.id}" class="category ${category.id}">`;
    domStrang +=    `<div class="col-sm-12">`;
    domStrang +=        `<h2>${category.categoryName}</h2>`;
    domStrang +=    `</div>`;
    movieElements.forEach((movieElement) => {
      if (movieElement.categoryId === category.id) {
        domStrang +=    `<div class="col-sm-4">`;
        domStrang +=      `<div class="checkbox">`;
        domStrang +=        `<label class="checkbox-inline">`;
        domStrang +=          `<input id="${movieElement.id}" type="checkbox" class="add-item ${movieElement.categoryId}" checked disabled>${movieElement.name}`;
        domStrang +=        `</label>`;
        domStrang +=      `</div>`;
        domStrang +=    `</div>`;
      }
    });
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDom = (categories, movieElements) => {
  infoHolder.innerHTML = domString(categories, movieElements);
  buttonEvents();
  checkboxEvents.checkboxEvents();
};
module.exports = printToDom;
