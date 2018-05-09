const data = require('./data');
const printCheckedItemsToDom = require('./domOutput');
const itemCheckbox = document.getElementsByClassName('add-item');
const budget = document.getElementById('budget');
const canImakeTheMovieYet = document.getElementById('canImakeTheMovieYet');
const progressBar = document.getElementById('progress-bar');
const allCategories = document.getElementsByClassName('category');

const checkboxInitializer = (e) => {
  checkedItems(e);
  // recalculatedBudget(printInitialBudget(), checkedItems(e));
  // console.log(recalculatedBudget(checkedItems(e)));
  recalculatedBudget();
  // console.log(checkedItems(e));
  printCheckedItemsToDom();
};
const checkedItems = (e) => {
  const selectedItem = [];
  const checkboxParent = e.target.parentNode.parentNode.parentNode.parentNode;
  data.getMovieElements().forEach((item) => {
    if (e.target.id === item.id) {
      selectedItem.push(item);
      // recalculatedBudget(selectedItem);
    }
    if (!checkboxParent.classList.contains('oneCheckboxIsChecked')) {
      checkboxParent.classList.add('oneCheckboxIsChecked');
    };
    // data.setCheckedItem(selectedItem);
    // console.log('datagetcheckeditem', data.getCheckedItem());
    atLeastOneCheckboxChecked(e);
    return selectedItem;
  });
  // console.log('selectedItems', selectedItems);
  // console.log('selectedItem', selectedItem);
  data.setCheckedItem(selectedItem);
  // console.log('datagetcheckeditem', data.getCheckedItem());
  // recalculatedBudget();
  // return selectedItem;
};

const recalculatedBudget = () => {
  const checkedItemCost = data.getCheckedItem()[0].cost;
  const budgetData = data.getBudget();
  const currentBudget = budgetData - checkedItemCost;
  data.setBudget(currentBudget);
  budget.innerHTML = `$${currentBudget}`;
  if (currentBudget < 0) {
    cantMakeMovieString(canImakeTheMovieYet);
    redColor(canImakeTheMovieYet);
    redColor(budget);
  };
};

const atLeastOneCheckboxChecked = (e) => {
  const howManyCategoriesTotal = data.getCategories();
  const howManyCategoriesAreChecked = [];
  for (let i = 0; i < allCategories.length; i++) {
    // const what = allCategories[i].classList.contains('oneCheckboxIsChecked');
    // console.log('categori', what);

    // console.log((allCategories[i].classList.contains('oneCheckboxIsChecked')));
    if (allCategories[i].classList.contains('oneCheckboxIsChecked')) {
      howManyCategoriesAreChecked.push(1);
    }
    if (howManyCategoriesAreChecked.length === howManyCategoriesTotal.length) {
      console.log('make movie!');
      canImakeTheMovieYet.innerHTML = 'You can make this movie!!!';
      makeItWell(canImakeTheMovieYet);
      greenColor(canImakeTheMovieYet);
    } else if (howManyCategoriesAreChecked.length < howManyCategoriesTotal.length) {
      cantMakeMovieString(canImakeTheMovieYet);
      makeItWell(canImakeTheMovieYet);
      redColor(canImakeTheMovieYet);
    };
  };
  // console.log('categori', howManyCategoriesAreChecked.length);
  progressBarUpdate(howManyCategoriesAreChecked);
};

const progressBarUpdate = (howManyCategoriesAreChecked) => {
  const howManyCategoriesTotal = data.getCategories();
  // console.log('howManyCategoriesTotal', howManyCategoriesAreChecked.length);
  const progressPercentage = (howManyCategoriesAreChecked.length / howManyCategoriesTotal.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  console.log('howManyCategoriesTotal', howManyCategoriesTotal);
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

// const printBudgetToDom = require('./domOutput');
