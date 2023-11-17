const hamburger = document.getElementsByClassName("hamburger")[0];
const navMenuContainer =
  document.getElementsByClassName("nav-menu-container")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];

const contactForm = document.getElementsByClassName("contactus-form")[0];

const formMsg = Array.from(document.getElementsByClassName("contact-mess"));
const formInputs = Array.from(document.getElementsByClassName("contact-input"));
const formArray = formInputs.concat(formMsg);

hamburger.addEventListener("click", hamburgerToggle);
contactForm.addEventListener("submit", formValidation);

function hamburgerToggle(e) {
  e.target.classList.toggle("is-active");
  navMenuContainer.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
  e.target.firstElementChild.classList.toggle("fa-xmark");
}
function validate() {
  let isValid;
  formArray.forEach((input) => {
    if (input.value === "" || input.value === undefined) {
      input.value = "This field is required";
      return;
    } else if (!input.checkValidity()) {
      input.value = "Please enter a valid value";
      return;
    } else {
      isValid = true;
    }
  });
  if (isValid) {
    return true;
  }
}
function formValidation(e) {
  e.preventDefault();
  if (validate()) {
    contactForm.reset();
  }
}
