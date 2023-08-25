let displayValue = "0";

function updateDisplay() {
  document.getElementById("calculator-display").innerText = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(displayValue).toString();
    displayValue = result;

    if (displayValue === "8") {
      window.location.href = "imy.html";
      return;
    }
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

updateDisplay();
