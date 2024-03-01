// 1. select outer div using ID
const outerDivEl = document.getElementById("outerDiv")
console.log(outerDivEl)

// step 2: navigate to the first child, which is a text node
const firstChild = outerDivEl.childNodes;
console.log(firstChild)

// step 3: navigate to second child, which is the innerDiv
const innerDiv = outerDivEl.childNodes[1]
console.log(innerDiv)

// step 4: select the first child of the inner div
const innerDivFirstChildEl = innerDiv.childNodes[0]
console.log(innerDivFirstChildEl)