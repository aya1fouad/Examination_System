///////////////////////constructor function/////////////////////////////////
function Question (question, choices,correctAnswer){
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
}
////////////////////////object of constructor///////////////////////////////
var myqquestions = [
        new Question("What is 10/2?",["3","5","115"],"5"),
        new Question("What is 20/2?",["3","5","10"],"10"),
        new Question("What is 30/3?",["10","5","115"],"10"),
        new Question("What is 40/4?",["3","5","10"],"10"),
        new Question("What is 50/2?",["3","5","25"],"25"),
        new Question("What is 60/2?",["30","5","115"],"30"),
        new Question("What is 70/2?",["3","35","115"],"35"),
        new Question("What is 80/2?",["3","5","40"],"40"),
        new Question("What is 90/3?",["3","30","115"],"30"),
        new Question("What is 100/2?",["3","5","50"],"50")
        
];
///////////////////////////shuffle for random/////////////////////////////////////
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
///////////////////////////////////////////////////////////////
var quiz = $("#quiz");
myqquestions = shuffle(myqquestions);
////////////////////////////////////////
for(var i = 0; i < myqquestions.length; i++){
    var question = document.createElement("div");
     //question.addClass('quetclass');
     question.setAttribute("class","quetclass");
    question.id = i;
    $(question).append("<h1>"+myqquestions[i].question+"</h1>");
    question.classList.add("question");
    var ul = document.createElement("ul");
    for(var k =0 ; k < 3; k++){
        $(ul).append("<li><input type='radio' name='choice"+i+"' id='"+k+'_'+i+"'><label for='"+k+'_'+i+"'>"+myqquestions[i].choices[k]+"</label></li>");
    }
    question.appendChild(ul);
    quiz.append(question);
}
// console.log($(".question").first());
//////////////////////////////////////////////////////////////
$(".question").first().addClass("inActive");

var nextBtn = $('#nextButton');
var prevBtn = $('#preButton');
var markBtn=$('.markButton');

preButton.style.visibility='hidden';
////////////////////////////////////////////////
var counter=1;
/////////////////////////markbutton/////////////////
var arrlistpos=new Array();
 markBtn.click(function(){
    if(!arrlistpos.includes(counter-1)){
        arrlistpos.push(counter-1);
    var li=document.createElement("li");
    li.setAttribute("class","lii");//////////////////////
    li.textContent=counter;
    $("#markul").append(li);
    }
 })

// ///////////////////////////////////////
 $("#markul").on('click','.lii',function(e){
    console.log(e.target.textContent);
    var lidiv=document.getElementsByClassName("quetclass");
  //  lidiv[counter-1].style.display="none";
  $(".inActive").removeClass("inActive")
     var pos=(e.target.textContent)-1;
     lidiv[pos].classList.add("inActive");
     counter=pos+1;
     console.log(pos)

})

////////////////////////next button/////////////////////
nextBtn.click(function(){
    var nextSibbling =  document.getElementsByClassName("inActive")[0].nextSibling
    if(nextSibbling != undefined){
        // console.log(nextSibbling)
        counter++;
        $(".inActive").removeClass("inActive")
        nextSibbling.classList.add("inActive");
        preButton.style.visibility='visible';
    } else {
        // location.href='result.html';
        // nextBtn.style.visibility='hidden';
        nextBtn.css("display","none");
    }

})
//////////////////////brev button////////////////////////////
prevBtn.click(function(){
   // console.log("55")
    var prevSibbling =  document.getElementsByClassName("inActive")[0].previousSibling
    if(prevSibbling != undefined){
        counter--;
        nextBtn.show();
        console.log(prevSibbling)
        $(".inActive").removeClass("inActive")
        prevSibbling.classList.add("inActive")
    } else{
        preButton.style.visibility='hidden';
    }

})
/////////////////////////getresult///////////////////////
var asnswer = []
var yourGrade ;
function getResult(){
    yourGrade = 0;
    for (var i =0 ; i<myqquestions.length;i++){
        if($("#"+i).has("input[type=radio]:checked").length !=0 ){
            if(myqquestions[i].correctAnswer == $("input[name=choice"+i+"]:checked").next().text()){
                yourGrade++;
            }
        }
    }
    return yourGrade;
}
// console.log(getResult());
/////////////////////////////////////////////submit///////////////////////

///////////////////////////////////////////////
var subButton = $('#submit');
subButton.click(function(){
var finalresult = getResult();
setCookie("finalresult",finalresult);
location.replace("result.html");
});
///////////////////////////////////////////timer////////////////////////////////

var tim;
var quizOver = false;
var min = 1;
var sec = 60;
var f = new Date();
function f1() {
    f2();
    document.getElementById("starttime").innerHTML = "<b>Your started your Exam at</b> " + f.getHours() + ":" + f.getMinutes();


}
function f2() {
    if (parseInt(sec) > 0) {
        sec = parseInt(sec) - 1;
        document.getElementById("showtime").innerHTML = "<b>Your Left Time  is :</b>" + min + " Minutes ," + sec + " Seconds";
        tim = setTimeout("f2()", 1000);
    }
    else {
        if (parseInt(sec) == 0) {
            min = parseInt(min) - 1;
            if (parseInt(min) == 0) {
                clearTimeout(tim);
                // getResult();
                var finalresult = getResult();
               setCookie("finalresult",finalresult);
              location.replace("timeout.html");
            }
            else {
                sec = 60;
                document.getElementById("showtime").innerHTML = "Your Left Time  is :" + min + " Minutes ," + sec + " Seconds";
                tim = setTimeout("f2()", 1000);
                
               
            }
          
        }

    }
}
///////////////////////////////////set cookies/////////////////////////////////////////
function setCookie(cookieName, cookieValue, expiredDate) {
    var expires = expiredDate || new Date();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires;
  }
  //////////////////////reload the page//////////////////
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
   location.replace("login.html");
}
