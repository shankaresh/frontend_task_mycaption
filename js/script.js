function validate() {
  Email = document.getElementById("Email").value;
  Password = document.getElementById("newpwd").value;
  RePassword = document.getElementById("renewpwd").value;

  if (!Email) {
    document.getElementById("emailErrmsg").style.display = "block";
    document.getElementById("emailErrmsg").innerHTML = "Please enter Email";
    document.getElementById("emailErrmsg").style.color = "red";
  }
  if (!ValidateEmail(Email)) {
    document.getElementById("emailErrmsg").style.display = "block";
    document.getElementById("emailErrmsg").innerHTML ="Please enter valid email";
    document.getElementById("emailErrmsg").style.color = "red";
  }

  if (!Password) {
    document.getElementById("errnewpwd").style.display = "block";
    document.getElementById("errnewpwd").innerHTML ="Please enter Password";
    document.getElementById("errnewpwd").style.color = "red";
  }

  if (!RePassword) {
    document.getElementById("errrenewpwd").style.display = "block";
    document.getElementById("errrenewpwd").innerHTML ="Please re-enter Password";
    document.getElementById("errrenewpwd").style.color = "red";
  }

  if (Password !== RePassword) {
    document.getElementById("errpwd").style.display = "block";
    document.getElementById("errpwd").innerHTML ="Please enter similar Password";
    document.getElementById("errpwd").style.color = "red";
  }

}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function msgg(val) {
  document.getElementById(val).style.display = "none";
}