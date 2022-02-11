function getCookie(cookieName) {
    var arr1 = document.cookie.split("; ");
    var result = "not found";
    for (var i = 0; i < arr1.length; i++) {
      var arr2 = arr1[i].split("=");
      if (arr2[0] == cookieName) {
        result = arr2[1];
      }
    }
    return result;
  }
///////////////////////////////////////////
var logemail;
var logpassword ;
var myform = document.getElementById("myform");
var semail= document.getElementById("semail");
var spassword = document.getElementById("spassword");
///////////////////////////////////////
var email=getCookie("email");
var password=getCookie("password");
////////////////////////////////////////////////////////
myform.addEventListener("submit", function (event) {
     event.preventDefault();
 /////////////////////////////email////////////////
    logemail = document.forms["myform"]["logemail"].value;
    if (logemail!=email) {
        semail.textContent = "This email should be the same registration email";
        event.preventDefault();
        document.forms["myform"]["logemail"].focus();
        return false;
    }
    else {
        semail.textContent = "";
    }
   //////////////////////////password////////////////////////////////
    logpassword = document.forms["myform"]["logpassword"].value;
    if (logpassword!=password) {
        spassword.textContent = "this password should be the same registeration password";
        event.preventDefault();
        document.forms["myform"]["logpassword"].focus();
        return false;
    }
    else {
        spassword.textContent = "";
    }
    /////////////////////////////////////////
    location.replace("exam.html");
});
//////////////////////////////////////////////////////////////////////////////////
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  location.replace("login.html");
}