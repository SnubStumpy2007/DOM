// select the list element with id cherry
const cherryEl = document.getElementById("cherry")

// select previous sibling 
const previousFruitEl = cherryEl.previousElementSibling;
console.log(previousFruitEl)

const nextFruit = cherryEl.nextElementSibling
console.log(nextFruit)