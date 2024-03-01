// get container element

const containerEl = document.getElementById('container')

// get all buttons within container
const buttonsEl = document.querySelectorAll('button')
console.log(buttonsEl)

// loop through buttons and change text of the next siblimg

buttonsEl.forEach((button) => {
    console.log(button)
    const nextEl = button.nextSibling
    console.log(nextEl)
    // check if each sibling is an element node
    if(nextEl && nextEl.nodeType === 3){
        nextEl.textContent = "Hi, I am Elize Lutus"
    }
})