const loadCategories = require('./xhr-categories');
const loadMovieElements = require('./xhr-movie-elements');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  console.log(categoriesData);
};

const whenMovieElementsLoad = function () {
  const movieElementsData = JSON.parse(this.responseText).items;
  console.log(movieElementsData);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadCategories(whenCategoriesLoad, errorFunction);
  loadMovieElements(whenMovieElementsLoad, errorFunction);
};

module.exports = {
  initializer,
};
