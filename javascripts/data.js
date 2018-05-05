let categories = [];
let movieElements = [];
let checkedItem = [];
let budget = 0;

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

const getCheckedItem = () => {
  return checkedItem;
};

const setCheckedItem = (itemsArray) => {
  checkedItem = itemsArray;
  // console.log('data', checkedItem);
};

const getBudget = () => {
  return budget;
};

const setBudget = (number) => {
  budget = number;
  // console.log('budget', budget);
};

module.exports = {
  getMovieElements,
  setMovieElements,
  getCategories,
  setCategories,
  getCheckedItem,
  setCheckedItem,
  getBudget,
  setBudget,
};
