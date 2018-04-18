const loadCategories = require('./xhr-categories');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  console.log(categoriesData);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadCategories(whenCategoriesLoad, errorFunction);
  // loadItems(whenItemsLoad, errorFunction);
};

module.exports = {
  initializer,
};
