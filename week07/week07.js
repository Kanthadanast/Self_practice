// get all node types children
const divElement = document.getElementById("123")
const divChildNodes = divElement.childNodes
divChildNodes.forEach((child) => console.log(child))

// get only Element node type children
const divChildren = divElement.children
for (let i = 0; i < divChildren.length; i++) {
  console.log(divChildren[i])
}
Array.from(divChildren).forEach((child) => console.log(child))


const pElement = document.createElement("p")
pElement.setAttribute("id", "p5")
pElement.textContent = "#5"
document.body.appendChild(pElement)

