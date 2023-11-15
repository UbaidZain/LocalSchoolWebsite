const hamburger = document.getElementsByClassName("hamburger")[0];
const navMenuContainer =
  document.getElementsByClassName("nav-menu-container")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];

hamburger.addEventListener("click", (e) => {
  e.target.classList.toggle("is-active");
  navMenuContainer.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
  e.target.firstElementChild.classList.toggle("fa-xmark");
});
