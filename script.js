const display = document.querySelector(".display");
const numsContainer = document.querySelector(".btn-container-nums");
const operContainer = document.querySelector(".btn-container-oper");
const equalBtn = document.querySelector(".equals-btn");
const sqrtBtn = document.querySelector(".sqrt-btn");
const warningMsg = document.querySelector(".warning");
const clearBtn = document.querySelector(".clear-btn");

function displayValues(e) {
  if (!e.target.closest("li")) return;
  display.textContent += e.target.closest("li").textContent;
}

function warning(msg) {
  warningMsg.textContent = msg;
  setTimeout(() => {
    warningMsg.textContent = "";
  }, 2000);
  display.textContent = "";
}

function getDisplayArray() {
  const displayContent = display.textContent;
  return displayContent.split(" ");
}

function clearDisplay() {
  display.textContent = "";
}

function getSqrt() {
  const displayArr = getDisplayArray();

  if (displayArr.length > 1 || typeof +displayArr[0] !== "number") {
    warning("Enter only one number");
  }
  if (displayArr.length === 1 && typeof +displayArr[0] === "number") {
    display.textContent = sqrt(displayArr[0]);
  }
}

function equals() {
  const displayArr = getDisplayArray();

  if (displayArr.length > 3) {
    warning("Please enter not more than two numbers");
    return;
  }

  if (displayArr.length < 3 || displayArr.includes("")) {
    warning("Please enter more than one number");
    return;
  }

  if (displayArr.includes("+")) {
    display.textContent = add(+displayArr[0], +displayArr[2]);
  }
  if (displayArr.includes("-")) {
    if (subtract(+displayArr[0], +displayArr[2]) < 0) {
      warning("Negative results not allowed");
      display.textContent = "";
      return;
    }
    display.textContent = subtract(+displayArr[0], +displayArr[2]);
  }
  if (displayArr.includes("*")) {
    display.textContent = multiply(+displayArr[0], +displayArr[2]);
  }
  if (displayArr.includes("/")) {
    display.textContent = divide(+displayArr[0], +displayArr[2]);
  }
  if (displayArr.includes("**")) {
    display.textContent = power(+displayArr[0], +displayArr[2]);
  }
  return;
}

numsContainer?.addEventListener("click", displayValues);
operContainer?.addEventListener("click", displayValues);
equalBtn?.addEventListener("click", equals);
sqrtBtn?.addEventListener("click", getSqrt);
clearBtn?.addEventListener("click", clearDisplay);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function sqrt(a) {
  return Math.sqrt(a);
}

function power(a, b) {
  return a ** b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sqrt,
  power,
};
