let categories = [];
let movieElements = [];
let checkedItem = [];
let budget = 0;

const getMovieElements = () => {
  return movieElements;
};
const setMovieElements = (movieElementsArray) => {
  movieElements = movieElementsArray;
};

const getCategories = () => {
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
  console.log('data', checkedItem);
};

const findCheckedItem = (id) => {
  return checkedItem.find(item => item.id === id);
};

const deleteCheckedItem = (removeItem) => {
  const removeIndex = checkedItem.indexOf(removeItem);
  checkedItem.splice(removeIndex, 1);
};

const getBudget = () => {
  return budget;
};

const setBudget = (number) => {
  budget = number;
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
  findCheckedItem,
  deleteCheckedItem,
};
