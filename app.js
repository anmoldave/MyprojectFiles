function checkLogin()
{
    localStorage.setItem("id", "ACCESS_GRANTED");
}

function loginSuccess(){
    

var user=localStorage.getItem("id");
if(user=="ACCESS_GRANTED"){
    console.log("Access granted");


}
else{
    window.location.replace("login.html");
}
}