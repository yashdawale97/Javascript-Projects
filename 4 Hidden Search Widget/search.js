const searching = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

searching.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
