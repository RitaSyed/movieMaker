const infoHolder = document.getElementById('info-holder');
// const data = require('./data');
const domString = (categories, movieElements) => {
  let domStrang = '';
  categories.forEach((category) => {
    movieElements.forEach((movieElement) => {
      if (movieElement.categoryId === category.id) {

        domStrang +=    `<h2>${category.categoryName}</h2>`;
        domStrang +=    `<div class="col-sm-4">`;
        domStrang +=      `<div class="checkbox">`;
        domStrang +=        `<label class="checkbox-inline">`;
        domStrang +=          `<input type="checkbox" id="inlineCheckbox1" value="option1">${movieElement.name}`;
        domStrang +=        `</label>`;
        domStrang +=      `</div>`;
        domStrang +=    `</div>`;
      }
    });
  });
  // console.log(domStrang);
  return domStrang;
};

const printToDom = (categories, movieElements) => {
  infoHolder.innerHTML = domString(categories, movieElements);
  // events.addDepartmentEvents();
};

module.exports = printToDom;

// getMovieElements,
//   setMovieElements,
//   getCategories,
//   setCategories,

// const domString = (array) => {
//   let domStrang = '';
//   array.forEach((ar) => {
//     domStrang += `<div class="col-sm-3">`;
//     domStrang +=   `<h3 data-department-id="${ar.id}">${ar.categoryName}</h3>`;
//     domStrang += `</div>`;
//   });
//   return domStrang;
// };

// <label class="checkbox-inline">
//   <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
// </label>
// <label class="checkbox-inline">
//   <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
// </label>
// <label class="checkbox-inline">
//   <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
// </label>
