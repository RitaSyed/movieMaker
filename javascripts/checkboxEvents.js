const data = require('./data');
const printCheckedItemsToDom = require('./domOutput');
const itemCheckbox = document.getElementsByClassName('add-item');
const budget = document.getElementById('budget');
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

};

const atLeastOneCheckboxChecked = (e) => {
  const howManyCategoriesAreChecked = [];
  for (let i = 0; i < allCategories.length; i++) {
    // const what = allCategories[i].classList.contains('oneCheckboxIsChecked');
    // console.log('categori', what);
    // console.log('categori', allCategories[i].length);
    if (allCategories[i].classList.contains('oneCheckboxIsChecked')) {

      howManyCategoriesAreChecked.push(1);
    }
    if (howManyCategoriesAreChecked.length === 4) {
      console.log('make movie!');
    } else if (howManyCategoriesAreChecked.length < 4) {
      // console.log('you cant make movie yet');
    };
  };
  // console.log(howManyCategoriesAreChecked.length);
  // const category1 = getElementById('0');
  // const categories = data.getCategories();
  // console.log('categories', categories);
  // console.log('atLeastOneCheckboxChecked', e.target.checked);
  // for(let i = 0; i<)
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
