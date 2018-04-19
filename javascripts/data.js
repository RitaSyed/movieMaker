let categories = [];
let movieElements = [];

const getMovieElements = () => {
  // console.log('getMovieElements', getMovieElements());
  return movieElements;
};
const setMovieElements = (movieElementsArray) => {
  movieElements = movieElementsArray;
};

const getCategories = () => {
  // console.log('getCategories', getCategories());
  return categories;
};
const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

module.exports = {
  getMovieElements,
  setMovieElements,
  getCategories,
  setCategories,
};
