// Select the input field where results will be displayed
const display = document.querySelector("input[name='display']");

// Function to append numbers/operators to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display (AC button)
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character (DE button)
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result (equals button)
function calculateResult() {
    try {
        // Use eval() to calculate the expression
        display.value = eval(display.value);
    } catch (error) {
        // Display an error if the input is invalid
        display.value = "Error";
    }
}

// Attach event listeners to all buttons
document.querySelectorAll("input[type='button']").forEach((button) => {
    const value = button.value;

    button.addEventListener("click", () => {
        if (value === "AC") {
            clearDisplay(); // Clear all
        } else if (value === "DE") {
            deleteLastCharacter(); // Delete last character
        } else if (value === "=") {
            calculateResult(); // Calculate the result
        } else {
            appendToDisplay(value); // Add the button's value to the display
        }
    });
});
