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

// check 

function checkRequired(inputArr) {
    inputArr.forEach( function(input) {
       if(input.value.trim() === '')      {
           showError(input, ` ${getFiledName(input)}  is Required`)
       } else{
           showSuccess(input)
       }
    })
}

function getFiledName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// addied event listner
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([ username, email , password , password02 ]);
});
