const data = require('./data');
const printCheckedItemsToDom = require('./domOutput');
const itemCheckbox = document.getElementsByClassName('add-item');
const budget = document.getElementById('budget');
const canImakeTheMovieYet = document.getElementById('canImakeTheMovieYet');
const progressBar = document.getElementById('progress-bar');

const checkboxInitializer = (e) => {
  if (e.target.checked) {
    console.log('checked');
    addCheckedItems(e);
    printIfICanMakeMovieString();
    recalculatedBudget(e, 'add');
    printCheckedItemsToDom();
  } else {
    recalculatedBudget(e, 'substract');
    removeCheckedItem(e);
    printCheckedItemsToDom();
    console.log('not checked');
  }
};

const removeCheckedItem = (e) => {
  const selectedItem = data.findCheckedItem(e.target.id);
  const categoryId = e.target.className.split(' ')[1];
  data.deleteCheckedItem (selectedItem);
  console.log('selectedItem', data.getCheckedItem());
  isCategorysCheckboxIsChecked(categoryId, 'itemDeleted');
};

const selectedItem = [];
const addCheckedItems = (e) => {
  console.log('checked');
  data.getMovieElements().forEach((item) => {
    if (e.target.id === item.id) {
      selectedItem.push(item);
    }
  });
  data.setCheckedItem(selectedItem);
  const categoryId = e.target.className.split(' ')[1];
  isCategorysCheckboxIsChecked(categoryId, 'itemChecked');
};
const isCategorysCheckboxIsChecked = (categoryId, action) => {
  const checkedItems = data.getCheckedItem();

  if (action === 'itemChecked') {
    const catId = checkedItems.find(item => item.categoryId === categoryId);
    if (howManyCategoriesAreChecked.indexOf(catId.categoryId) === -1) {
      console.log('new categ', howManyCategoriesAreChecked.indexOf(catId.categoryId) === -1);
      console.log('new categ', catId.categoryId);
      howManyCategoriesAreChecked.push(catId.categoryId);
    }
    progressBarUpdate();
    console.log('catId.categoryId', catId.categoryId);
    console.log('howManyCategoriesAreChecked', howManyCategoriesAreChecked);
  }
  else if (action === 'itemDeleted') {
    const catId = checkedItems.find(item => item.categoryId === categoryId);
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
    if (currentBudget < 0) {
      cantMakeMovieString(canImakeTheMovieYet);
      redColor(canImakeTheMovieYet);
      redColor(budget);
    }
    else if (currentBudget > 0) {
      // canMakeMovieString(canImakeTheMovieYet);
      greenColor(canImakeTheMovieYet);
      greenColor(budget);
    }
  } else if (math === 'substract') {
    const currentBudget = parseInt(budgetData) + parseInt(checkedItemCost);
    console.log ('substract', currentBudget);
    data.setBudget(currentBudget);
    budget.innerHTML = `$${currentBudget}`;
    if (currentBudget < 0) {
      cantMakeMovieString(canImakeTheMovieYet);
      redColor(canImakeTheMovieYet);
      redColor(budget);
    }
    else if (currentBudget > 0) {
      // canMakeMovieString(canImakeTheMovieYet);
      greenColor(canImakeTheMovieYet);
      greenColor(budget);
    }
  }
};
const howManyCategoriesAreChecked = [];

const printIfICanMakeMovieString = () => {
  console.log('print');
  const howManyCategoriesTotal = data.getCategories();
  if (howManyCategoriesAreChecked.length === howManyCategoriesTotal.length) {
    canImakeTheMovieYet.innerHTML = 'You can make this movie!!!';
    makeItWell(canImakeTheMovieYet);
    greenColor(canImakeTheMovieYet);
  } else if (howManyCategoriesAreChecked.length < howManyCategoriesTotal.length) {
    console.log('howManyCategoriesAreChecked.length', howManyCategoriesAreChecked.length);
    console.log('howManyCategoriesTotal.length', howManyCategoriesTotal.length);
    cantMakeMovieString(canImakeTheMovieYet);
    makeItWell(canImakeTheMovieYet);
    redColor(canImakeTheMovieYet);
  };
  // };
  // console.log('howManyCategoriesAreChecked.length', howManyCategoriesAreChecked);
  // progressBarUpdate();
};

const progressBarUpdate = () => {
  const howManyCategoriesTotal = data.getCategories();
  // console.log('howManyCategoriesTotal', howManyCategoriesAreChecked.length);
  const progressPercentage = (howManyCategoriesAreChecked.length / howManyCategoriesTotal.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  // console.log('howManyCategoriesTotal', howManyCategoriesTotal);
};
const cantMakeMovieString = (element) => {
  return element.innerHTML = "You can't make this movie";
};
// const canMakeMovieString = (element) => {
//   return element.innerHTML = 'You can make this movie!!!';
// };

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

// const printBudgetToDom = require('./domOutput');
