//////////////////get cookies//////
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
/////////////////////////////////////////////
var finalresult=getCookie("finalresult");
var fname=getCookie("fname");
 /////////////////////////////////////
var result=document.getElementById("result");
result.innerText=fname+" , your result is : "+finalresult+" from 10 ";
/////////////////////////reload the page/////////////////////////////////
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  location.replace("login.html");
}