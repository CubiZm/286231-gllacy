var link = document.querySelector(".address .button");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".modal-form .close-button");

var form = popup.querySelector(".form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=address]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
  if (!login.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
