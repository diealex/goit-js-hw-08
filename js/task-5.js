const button = document.querySelector(".changeColorBtn");
const span = document.querySelector(".color");
const body = document.querySelector("body");
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const handleClick = (event) => {
  const color = getRandomHexColor();
  span.textContent = color;
  body.setAttribute("style", `background-color: ${color}`);
};
button.addEventListener("click", handleClick);
