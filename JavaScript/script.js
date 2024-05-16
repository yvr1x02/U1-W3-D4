const arrayExtractedNumbers = [];

const createCells = (nCells) => {
  const containerCells = document.getElementById("tombola");
  for (let index = 0; index < nCells; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const cellText = document.createElement("h3");
    cellText.innerText = index + 1;
    cell.appendChild(cellText);
    containerCells.appendChild(cell);
    arrayExtractedNumbers.push(cell);
  }
};

const extrationButton = document.getElementById("estrai-numero");

extrationButton.addEventListener("click", function (event) {
  let random = Math.floor(Math.random() * 76) + 1;
  console.log(random);

  arrayExtractedNumbers[random].classList.add("selected");
});

window.addEventListener("DOMContentLoaded", () => {
  createCells(76);
});
