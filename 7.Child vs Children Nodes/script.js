// fetch id with id 'parent"

const parentEl = document.querySelector("#parent")
console.log(parentEl.childNodes)

parentEl.childNodes.forEach(node=>console.log(node))

console.log(parentEl.children)