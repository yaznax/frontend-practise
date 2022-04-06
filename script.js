const hamburger = document.querySelector(".hamburger");
const navbarcontainer = document.querySelector(".navbar-container");

hamburger.addEventListener("click", () => {
  navbarcontainer.classList.toggle("toggle");
});
