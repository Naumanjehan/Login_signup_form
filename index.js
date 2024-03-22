// Add your JavaScript code here

let credential = [];
function showHiddenForm(formId) {
  document.getElementById(formId).style.display = "block";
  var otherFormId = formId === "Signupfun" ? "loginfun" : "Signupfun";
  document.getElementById(otherFormId).style.display = "none";
}

function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassward = document.getElementById("con-pass").value;

  if (
    !name == "" &&
    !email == "" &&
    !password == "" &&
    !confirmPassward == ""
  ) {
    credential.push({ name, email, password, confirmPassward });
    alert("Signed up successfully. You can now login.");
    showHiddenForm('loginfun')
  } else {
    alert("error: enter valid value in the feild");
  }
}
  function loginf() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let credential1 = credential.find(function (user) {
      return user.email === email && user.password === password;
    });
    if (credential1) {
      alert("welcome");
    } else {
      alert("password not match");
    }
  }

