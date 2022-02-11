var myForm = document.getElementById("myform");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var submit = document.getElementById("submit");

var sfname = document.getElementById("sfname");
var slname = document.getElementById("slname");
var semail = document.getElementById("semail");
var spassword = document.getElementById("spassword");
var srepassword = document.getElementById("srepassword");

//////////////////////////////////////////////////////////////////////
function setCookie(cookieName, cookieValue, expiredDate) {
  /*if(arguments.length !=2 || arguments.length !=3)
    {
        throw("setCookie must have a 2 or 3 params");
    }*/
  var expires = expiredDate || new Date();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires;
}
//////////////////////////////////////////////////////
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  /////////////////fname/////////////////////
  if (fname.value == "" || !isNaN(fname.value)) {
    sfname.textContent = "this field required & you should enter valid name !!";
    event.preventDefault();
    fname.focus();
    return false;
  }
  else {
    sfname.textContent = "";
  }
  /////////////////lname////////////////////////
  if (lname.value == "" || !isNaN(lname.value)) {
    slname.textContent = "this field required & you should enter valid name !";
    event.preventDefault();
    lname.focus();
    return false;
  }
  else {
    slname.textContent = "";
  }
  /////////////////email/////////////////////////
  if (email.value == "" || !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    semail.textContent = "this field is required & you should enter valid name";
    event.preventDefault();
    email.focus();
    return false;
  }
  else {
    semail.textContent = "";
  }
  /////////////////////////////email///////////////////////////////////////////
  if (password.value == "" || password.value.length < 8) {
    spassword.textContent = "this field is required & should be more than 8 characters";
    event.preventDefault();
    password.focus();
    return false;
  }
  else {
    spassword.textContent = "";
  }

  /////////////////////////////////////////////////////
  if (repassword.value == "" || repassword.value != password.value) {
    srepassword.textContent = "this field is required & should be the same previouse password";
    event.preventDefault();
    repassword.focus();
    return false;
  }
  else {
    srepassword.textContent = "";
  }
  ///////////////////////////////////////
  setCookie("fname",fname.value);
  setCookie("lname",lname.value);
  setCookie("email", email.value);
  setCookie("password", password.value);

  location.replace("login.html");
});
//////////////////////reload the page/////////////////////////////////////
//if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  //location.replace("login.html");
//}