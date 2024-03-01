// select a list item using data attribute
const selectedItem = document.querySelector('[data-item="fruit"]')

// step 2: navigate to parent element
const parentListEl = selectedItem.parentNode;
console.log(parentListEl)

// STEP 3 navigate to grandparent