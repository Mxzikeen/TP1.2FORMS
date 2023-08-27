window.onload = function () {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const age = document.getElementById("age");
  const password = document.getElementById("password");
  const email = document.getElementById("email");

  form.addEventListener("submit", function (event) {
    if (!validateName(name.value)) {
      event.preventDefault();
      alert("Please enter a valid name");
    }
    if(!validateLastname(lastname.value)){
        event.preventDefault();
        alert("Please enter a valid lastname");
    }
    if(!validateAge(age.value)){
        event.preventDefault();
        alert("Invalid age format or not a valid age");
    }
    if(!validatePassword(password.value)){
        event.defaultPrevented();
        alert("Invalid password")
    }
    if(!validateEmail(email.value)){
        event.preventDefault();
        alert("Invalid Email address")
    }
  });
};

function validateName(name) {
  return /^[a-zA-Z\s]{1,20}$/.test(name);
}
function validateLastname(lastname) {
  return /^[a-zA-Z\s]{1,20}$/.test(lastname);
}
function validateAge(age) {
  return  /^\d+$/.test(age) && age>0 && age<120;
}

function validatePassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,20}$/.test(password);
}

function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|icloud\.com)$/.test(
    email
  );
}
