let categories = [];
let movieElements = [];
let checkedItems = [];
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

const getCheckedItems = () => {
  return checkedItems;
};

const setCheckedItems = (itemsArray) => {
  checkedItems = itemsArray;
  console.log('data', checkedItems);
};

const getBudget = () => {
  return budget;
};

const setBudget = (number) => {
  budget = number;
  console.log('budget', budget);
};

module.exports = {
  getMovieElements,
  setMovieElements,
  getCategories,
  setCategories,
  getCheckedItems,
  setCheckedItems,
  getBudget,
  setBudget,
};
