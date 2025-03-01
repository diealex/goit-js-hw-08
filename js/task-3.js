const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  let str = event.currentTarget.value;
  output.textContent = !str?.trim() ? "Anonymous" : str.trim();
});
