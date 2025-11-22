// -------------------------------
// State
// -------------------------------
let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

// -------------------------------
// Helper functions
// -------------------------------
function addNumber(num) {
  if (!isNaN(num)) {
    numberBank.push(Number(num));
    render();
  }
}

function sortOne() {
  if (numberBank.length === 0) return;

  const num = numberBank.shift();
  if (num % 2 === 0) evenNumbers.push(num);
  else oddNumbers.push(num);

  render();
}

function sortAll() {
  while (numberBank.length > 0) {
    sortOne();
  }
}

// -------------------------------
// Components
// -------------------------------

function NumberBankComponent() {
  const div = document.createElement("div");

  const heading = document.createElement("h3");
  heading.textContent = "Number Bank:";
  div.appendChild(heading);

  const numbersDiv = document.createElement("div");
  numbersDiv.textContent = numberBank.join(", ") || "(empty)";
  div.appendChild(numbersDiv);

  return div;
}

function OddNumbersComponent() {
  const div = document.createElement("div");

  const heading = document.createElement("h3");
  heading.textContent = "Odd Numbers:";
  div.appendChild(heading);

  const numbersDiv = document.createElement("div");
  numbersDiv.textContent = oddNumbers.join(", ") || "(empty)";
  div.appendChild(numbersDiv);

  return div;
}

function EvenNumbersComponent() {
  const div = document.createElement("div");

  const heading = document.createElement("h3");
  heading.textContent = "Even Numbers:";
  div.appendChild(heading);

  const numbersDiv = document.createElement("div");
  numbersDiv.textContent = evenNumbers.join(", ") || "(empty)";
  div.appendChild(numbersDiv);

  return div;
}

function ControlsComponent() {
  const div = document.createElement("div");
  div.style.marginBottom = "20px";

  // Input field
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Enter a number";
  input.id = "numberInput";
  div.appendChild(input);

  // Add Number Button
  const addButton = document.createElement("button");
  addButton.textContent = "Add Number";
  addButton.style.marginLeft = "8px";
  addButton.addEventListener("click", () => {
    addNumber(input.value);
    input.value = "";
    input.focus();
  });
  div.appendChild(addButton);

  // Sort One Button
  const sortOneButton = document.createElement("button");
  sortOneButton.textContent = "Sort 1";
  sortOneButton.style.marginLeft = "8px";
  sortOneButton.addEventListener("click", sortOne);
  div.appendChild(sortOneButton);

  // Sort All Button
  const sortAllButton = document.createElement("button");
  sortAllButton.textContent = "Sort All";
  sortAllButton.style.marginLeft = "8px";
  sortAllButton.addEventListener("click", sortAll);
  div.appendChild(sortAllButton);

  return div;
}

// -------------------------------
// Render
// -------------------------------
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = "";

  $app.appendChild(ControlsComponent());
  $app.appendChild(NumberBankComponent());
  $app.appendChild(OddNumbersComponent());
  $app.appendChild(EvenNumbersComponent());
}

// -------------------------------
// Mount app
// -------------------------------
render();