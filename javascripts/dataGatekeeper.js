const loadCategories = require('./xhr-categories');
const loadMovieElements = require('./xhr-movie-elements');
const data = require('./data');
const dom = require('./dom');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  console.log(categoriesData);
  data.setCategories(categoriesData);
  // dom(categoriesData);
};

const whenMovieElementsLoad = function () {
  const movieElementsData = JSON.parse(this.responseText).items;
  console.log(movieElementsData);
  data.setMovieElements(movieElementsData);
  // dom(data.getCategories, data.getMovieElements);
  const datacateg = data.getCategories();
  const dataelem = data.getMovieElements();
  console.log(dom);
  dom(datacateg, dataelem);
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
