// dom transversal
const title = document.getElementById("title")
console.log(title.textContent)
title.textContent = "new title"

// change background color
title.style.background = "red"
title.style.color = "white"

const paragraphEl = document.getElementById("paragraph")
paragraphEl.innerHTML = "<strong>Hi, I am Elize Lutus</strong>"

const firstCommentEl = document.getElementById("comment1").querySelector(".commentText")
firstCommentEl.innerText = "Hi, I'm Elize Lutus and my best friend is Teepo"