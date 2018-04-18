const infoHolder = document.getElementById('info-holder');

const domString = (array) => {
  let domStrang = '';
  array.forEach((ar) => {
    domStrang += `<div class="col-sm-3">`;
    domStrang +=   `<h3 data-department-id="${ar.id}">${ar.categoryName}</h3>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDom = (departments) => {
  infoHolder.innerHTML = domString(departments);
  // events.addDepartmentEvents();
};

module.exports = printToDom;

//     <div class="col-sm-offset-2 col-sm-10">
//       <div class="checkbox">
//         <label>
//           <input type="checkbox"> Remember me
//         </label>
//       </div>
//     </div>

// <label class="checkbox-inline">
//   <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
// </label>
// <label class="checkbox-inline">
//   <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
// </label>
// <label class="checkbox-inline">
//   <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
// </label>
