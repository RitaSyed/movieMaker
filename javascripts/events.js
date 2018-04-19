const data = require('./data');
const itemCheckbox = document.getElementsByClassName('add-item');
const selectedItems = [];
const addItems = (e) => {

  data.getMovieElements().forEach((item) => {
    if (e.target.id === item.id) {
      selectedItems.push(item);
    }
  });
  console.log('selectedItems', selectedItems);
  return selectedItems;
};

const addItemEvents = () => {
  for (let i = 0; i < itemCheckbox.length; i++) {
    itemCheckbox[i].addEventListener('click', addItems);
  }
};

module.exports = addItemEvents;
