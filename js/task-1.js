const categories = document.querySelectorAll(".item");
const h2 = document.querySelectorAll("h2");
const ul = document.querySelectorAll(".item ul");
console.log("Number of categories: " + categories.length);
let i = 0;
categories.forEach((cat) => {
  console.log("Category: " + h2[i].textContent);
  console.log("Elements: " + ul[i].querySelectorAll("li").length);
  i += 1;
});
