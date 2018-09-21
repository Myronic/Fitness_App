var staySignedFlag = localStorage.getItem("staySI");
var loginClick = document.getElementById("navLogin-btn");
loginClick.addEventListener("click",function(){
    if(staySignedFlag == "true"){
        //open profile page directly
        loginClick.setAttribute("href","profilePage.html");
        window.location.replace("profilePage.html");
    }
    else{
        //open login page
        loginClick.setAttribute("href","login.html");
        window.location.replace("login.html");
    }
});