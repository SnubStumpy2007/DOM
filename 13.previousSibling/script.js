// select buttons
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")

// use previousSibbling() to get precedding sibling
const text1 = button1.previousSibling;
const text2 = button2.previousSibling;


// change text of preceding paragraph

if (text1.nodeType === 3) {
    text1.textContent = "text content has been updated"
}

if (text2.nodeType === 3) {
    text2.textContent = "Text 2 has been updated."
}