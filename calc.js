const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#display");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equals");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    display.value = currentInput;
  });
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

equalBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput);
    display.value = currentInput;
  } catch {
    display.value = "Error";
    currentInput = "";
  }
});
