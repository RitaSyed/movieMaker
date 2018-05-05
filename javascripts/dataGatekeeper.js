const loadCategories = require('./xhr-categories');
const loadMovieElements = require('./xhr-movie-elements');
const data = require('./data');
const dom = require('./dom');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  loadMovieElements(whenMovieElementsLoad, errorFunction);
};

const whenMovieElementsLoad = function () {
  const movieElementsData = JSON.parse(this.responseText).items;
  data.setMovieElements(movieElementsData);
  const categoriesData = data.getCategories();
  dom(categoriesData, movieElementsData);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadCategories(whenCategoriesLoad, errorFunction);
};

module.exports = {
  initializer,
};
