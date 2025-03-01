const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let object = {};
  const form = event.target;
  object.email = form.elements.email.value.trim();
  object.password = form.elements.password.value.trim();
  if (!object.email || !object.password) {
    alert("All form fields must be filled in");
  } else console.log(`Email: ${object.email}, Password: ${object.password}`);
  form.reset();
});
