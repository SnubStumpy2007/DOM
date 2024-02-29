// data attributes

const userCard = document.getElementById("userCard")
const userId = userCard.getAttribute("data-user-id")
const userRole = userCard.getAttribute("data-user-role")
console.log(userId)
console.log(userRole)

// modifying data attributes
userCard.setAttribute("data-user-role", "super-admin")
console.log(userCard)