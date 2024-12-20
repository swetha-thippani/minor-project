// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");

    // Function to append value to the display
    function appendToDisplay(value) {
        display.value += value;
    }

    // Function to clear the display
    function clearDisplay() {
        display.value = "";
    }

    // Function to delete the last character from the display
    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    // Function to calculate the result
    function calculateResult() {
        try {
            display.value = eval(display.value.replace(/×/g, "*").replace(/÷/g, "/"));
        } catch (error) {
            display.value = "Error";
        }
    }

    // Make functions global
    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.calculateResult = calculateResult;
});
