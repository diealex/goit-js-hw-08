function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const selectOpt = document.querySelector(".inputSmall");

function onBtnClick() {
  if (1 <= selectOpt.value && selectOpt.value <= 100) {
    createBoxes(selectOpt.value);
  }
  selectOpt.value = "";
}

createBtn.addEventListener("click", onBtnClick);

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const parentDiv = document.querySelector("#boxes");
  let divs = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    divs.push(
      `<div class="to-del" style="width:${size + i * 10}px; height:${
        size + i * 10
      }px; background-color: ${getRandomHexColor()};"></div>`
    );
  }
  parentDiv.innerHTML = divs.join("");
}

function destroyBoxes() {
  const divs = document.querySelectorAll(".to-del");
  divs.forEach((div) => {
    div.remove();
  });
}
