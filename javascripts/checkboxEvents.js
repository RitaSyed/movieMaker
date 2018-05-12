const data = require('./data');
const printCheckedItemsToDom = require('./domOutput');
const itemCheckbox = document.getElementsByClassName('add-item');
const budget = document.getElementById('budget');
const canImakeTheMovieYet = document.getElementById('canImakeTheMovieYet');
const progressBar = document.getElementById('progress-bar');

const checkboxInitializer = (e) => {
  if (e.target.checked) {
    addCheckedItems(e);
    recalculatedBudget(e, 'add');
    printIfICanMakeMovieString();
    printCheckedItemsToDom();
  } else {
    recalculatedBudget(e, 'substract');
    removeCheckedItem(e);
    printIfICanMakeMovieString();
    printCheckedItemsToDom();
  }
};

const removeCheckedItem = (e) => {
  const selectedItem = data.findCheckedItem(e.target.id);
  const categoryId = e.target.className.split(' ')[1];
  data.deleteCheckedItem (selectedItem);
  categoriesChecked(categoryId, 'itemDeleted');
};

const selectedItem = [];
const addCheckedItems = (e) => {
  data.getMovieElements().forEach((item) => {
    if (e.target.id === item.id) {
      selectedItem.push(item);
    }
  });
  data.setCheckedItem(selectedItem);
  const categoryId = e.target.className.split(' ')[1];
  categoriesChecked(categoryId, 'itemChecked');
};

const howManyCategoriesAreChecked = [];
const categoriesChecked = (categoryId, action) => {
  const checkedItems = data.getCheckedItem();
  const catId = checkedItems.find(item => item.categoryId === categoryId);
  if (action === 'itemChecked') {
    if (howManyCategoriesAreChecked.indexOf(catId.categoryId) === -1) {
      howManyCategoriesAreChecked.push(catId.categoryId);
    }
    progressBarUpdate();
  }
  else if (action === 'itemDeleted') {
    console.log('categoryId', categoryId);
    if (catId === undefined) {
      const index = howManyCategoriesAreChecked.indexOf(categoryId);
      howManyCategoriesAreChecked.splice(index, 1);
      console.log('categ deleted howManyCategoriesAreChecked', howManyCategoriesAreChecked);
      progressBarUpdate();
    }
  }
};

const recalculatedBudget = (e, math) => {
  const selectedItemTarget = data.findCheckedItem(e.target.id);
  const checkedItemCost = selectedItemTarget.cost;
  const budgetData = data.getBudget();
  if (math === 'add') {
    const currentBudget = parseInt(budgetData) - parseInt(checkedItemCost);
    data.setBudget(currentBudget);
    budget.innerHTML = `$${currentBudget}`;
  } else if (math === 'substract') {
    const currentBudget = parseInt(budgetData) + parseInt(checkedItemCost);
    console.log ('substract', currentBudget);
    data.setBudget(currentBudget);
    budget.innerHTML = `$${currentBudget}`;
  }
};

const printIfICanMakeMovieString = () => {
  console.log('print');
  const budgetData = data.getBudget();
  const howManyCategoriesTotal = data.getCategories();
  if (howManyCategoriesAreChecked.length === howManyCategoriesTotal.length && budgetData > 0) {
    canImakeTheMovieYet.innerHTML = 'You can make this movie!!!';
    makeItWell(canImakeTheMovieYet);
    greenColor(canImakeTheMovieYet);
    greenColor(budget);
  } else if (howManyCategoriesAreChecked.length < howManyCategoriesTotal.length && budgetData > 0) {
    cantMakeMovieString(canImakeTheMovieYet);
    makeItWell(canImakeTheMovieYet);
    redColor(canImakeTheMovieYet);
    greenColor(budget);
  } else if (howManyCategoriesAreChecked.length < howManyCategoriesTotal.length && budgetData < 0) {
    redColor(budget);
    redColor(canImakeTheMovieYet);
    cantMakeMovieString(canImakeTheMovieYet);
    makeItWell(canImakeTheMovieYet);
  } else if (howManyCategoriesAreChecked.length === howManyCategoriesTotal.length && budgetData < 0) {
    redColor(budget);
    redColor(canImakeTheMovieYet);
    cantMakeMovieString(canImakeTheMovieYet);
    makeItWell(canImakeTheMovieYet);
  }
};

const progressBarUpdate = () => {
  const howManyCategoriesTotal = data.getCategories();
  const progressPercentage = (howManyCategoriesAreChecked.length / howManyCategoriesTotal.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
};
const cantMakeMovieString = (element) => {
  return element.innerHTML = "You can't make this movie";
};

const makeItWell = (element) => {
  element.classList.add('well', 'well-sm');
};

const greenColor = (element) => {
  element.classList.remove('red');
  element.classList.add('green');
};

const redColor = (element) => {
  element.classList.remove('green');
  element.classList.add('red');
};

const checkboxEvents = () => {
  for (let i = 0; i < itemCheckbox.length; i++) {
    itemCheckbox[i].addEventListener('click', checkboxInitializer);
  };
};

module.exports = {
  checkboxEvents,
};
