const fictionBooks = document.getElementsByClassName("fiction")
console.log(fictionBooks)

const nonFiction = document.getElementsByClassName("non-fiction")
console.log(nonFiction)

const fictionArray = Array.from(nonFiction)
console.log(fictionArray)

const fictionTitle = fictionArray.map((el) => el.innerHTML)
console.log(fictionTitle)