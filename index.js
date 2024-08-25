const display = document.querySelector(".display");

function addToDisplay(input) {

    display.value = display.value + input;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value)

    }
    catch (error) {
        display.value = "Give valid input"
    }
}