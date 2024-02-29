// query selector only targets the first element named
// query selector All targets all named elements

const productCard = document.querySelectorAll(".product-card")
console.log(productCard)

const names = document.querySelectorAll(".product-name")
console.log(names)

const namesArray = Array.from(names)
const namesText = namesArray.map((el) => console.log(el.innerHTML))

const productNames = document.querySelectorAll('[data-category="laptop"]')
console.log(productNames)