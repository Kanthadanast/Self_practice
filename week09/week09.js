// week09

// NO.1
function checkEmpty(e) {
  console.log(e)
  if (e.target.value.trim().length === 0) {
    message.style.color = "red"
    message.textContent = `your ${e.target.id} is empty`
  }
}


// NO.2
submitButton.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.eventPhase);
    console.log("Submit button was clicked!")
}, true )

const divElement = document.querySelector("div")
divElement.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.eventPhase);    
    console.log("Div was clicked!")
}, true )

const bodyElement = document.body
bodyElement.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.eventPhase);
    console.log("body was clicked!")
})


// NO.3
// 1. add event with annonymous handle function
submitButton.addEventListener("click", () => {
  console.log("Submit button was clicked!")
})
submitButton.removeEventListener("click", () => {
  console.log("Submit button was clicked!")
}) //does not work

// 2. add event with named function
const handlerButton = () => {
  console.log("Submit button was clicked!")
}
submitButton.addEventListener("click", handlerButton)
submitButton.removeEventListener("click", handlerButton)


// NO.4
const yourName = prompt("What is your name ?", "typing your name...")
console.log(yourName);
let nameConfirm = null
if(yourName.trim().length !== 0 && yourName.trim() !== null) {
    console.log(yourName.length);
    confirm(`Are you ${yourName} ?`)
    
}
nameConfirm? alert(`Hello, ${yourName}`) : alert(`Hello, Guest`)