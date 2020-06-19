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

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim()) ){
    showSuccess(input)

  }
  else{
    showError(input , 'Email is not valid')
  }
}

// check  Required for all fields
function checkRequired(inputArr) {
    inputArr.forEach( function(input) {
       if(input.value.trim() === '')      {
           showError(input, ` ${getFiledName(input)}  is Required`)
       } else{
           showSuccess(input)
       }
    })
}
// check length of fields eg. min and max are limits for username 

function checkLength(input, min, max) {
    if(input.value.length < min){
      showError(input, `${getFiledName(input)}  must be alease ${min} characters` )
    }
    else if(input.value.length > max){
      showError(input, `${getFiledName(input)} must be less than the ${max} characters`)
    }
    else{
      showSuccess(input);

    }
}

 // get filed name is for name 
function getFiledName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// check if password are matching each c 
function checkpasswordMatch(input1, input2) {
  if(input1.value !== input.value){
 showError(input2, 'Passwods do not match')
  }
  
}
// addied event listner
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([ username, email , password , password02 ]);
  checkLength(username, 3, 15)
  checkLength(password, 6 ,25)
  checkEmail(email)
  checkpasswordMatch([password,password02]);
});
