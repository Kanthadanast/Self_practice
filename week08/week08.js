//week08

// 1. find soup
const meatAllElements = document.querySelectorAll(".meat")

// วิธีที่ 1 : filter
const meatSoupElements = Array.from(meatAllElements).filter(ele =>
  ele.textContent.toLowerCase().includes("soup")
)

// วิธีที่ 2 : forEach + push
const result = []
meatAllElements.forEach(item => {
  if (item.textContent.toLowerCase().includes("soup")) {
    result.push(item)
  }
})

// 2. insertBefore, removeChild, replaceChild 

const soupUlElement = document.getElementById("soup")

// (1) insertBefore → เพิ่ม Cabbage Soup ก่อน Beef Soup
const newNode = document.createElement("li")
newNode.textContent = "Cabbage Soup"
newNode.setAttribute("class", "vegan")
const refNode = Array.from(soupUlElement.children)
  .find(e => e.textContent.includes("Beef Soup"))
soupUlElement.insertBefore(newNode, refNode)

// (2) removeChild → ลบ Vegetable Soup
const vegNode = Array.from(soupUlElement.children)
  .find(e => e.textContent.trim() === "Vegetable Soup")
soupUlElement.removeChild(vegNode)

// (3) replaceChild → แทน Beef Soup ด้วย Pork Soup
const porkNode = document.createElement("li")
porkNode.textContent = "Pork Soup"
porkNode.setAttribute("class", "meat")
soupUlElement.replaceChild(porkNode, refNode)



