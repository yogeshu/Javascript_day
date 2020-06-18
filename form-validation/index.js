const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password02 = document.getElementById("password02");
// success and error

function showError(input, messsage) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = messsage;
}
function showSuccess(input, messsage) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// email check

function isValidemail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// addied event listner
form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidemail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }
  if (password02.value === "") {
    showError(password02, "password  is required");
  } else {
    showSuccess(password02);
  }
});
