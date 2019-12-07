let display = document.getElementById('displayInput')

//Setting up the dom
document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
})

//Creating a function to add input to the display, I know I have to do something with `${}`
const addNum = () => {
    let userInput = document.getElementById('number').value
    display = userInput
    document.getElementById('displayInput').textContent = document.getElementById('number').value
    document.getElementById('number').value++
}
//Setting up the event listener for the plus button
document.getElementById('plus').addEventListener('click', addNum)

//Creating a function to subtract the input to the display, I know I have to do something with `${}`
const minusNum = () => {
    let userInput = document.getElementById('number').value
    display = userInput
    document.getElementById('displayInput').textContent = document.getElementById('number').value 
    document.getElementById('number').value--
    //Tried to get the text to get to change to red
    if (displayInput < 0) {
        document.getElementById('displayInput').style.color = red
    }
}
//Setting up the event listener for the minus button
document.getElementById('minus').addEventListener('click', minusNum)