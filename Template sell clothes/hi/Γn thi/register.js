function kt() {
  var txtName = document.getElementById("txt-name").value;
  var password = document.getElementById("password").value;
  var cofpassword = document.getElementById("cof-password").value;
  if (txtName == "") {
    alert("Name can't be blank!");
    return false;
  }
  if (password != cofpassword) {
    alert("Password and repeat password must be the same!");
    return false;
  }

  return true;
}
function ValidateEmail(mail) {
  var email = document.getElementById("email").value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}
