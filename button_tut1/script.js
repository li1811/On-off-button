//grabbing the needed html elements
let button = document.getElementById("togglebutton");
let circle = document.getElementById("circle");
let buttonText = document.getElementById("buttontext");

//initialize button state
let buttonState = false;

//start of button function
function toggleButton() {
    buttonState=(!buttonState);
    
    if (buttonState) {
        buttonText.innerText="BUTTON ON";
        button.classList.add("changebutton");
        circle.classList.add("changecircle");
    } else {
        buttonText.innerText="BUTTON OFF";
        button.classList.remove("changebutton");
        circle.classList.remove("changecircle");
    }
}