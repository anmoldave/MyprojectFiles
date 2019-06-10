
//globally declared the credentials so it can be used anywhere in the javascript

var credentials=[
    {"username":"Anmol","password":"anmol123"},
    {"username":"Meet","password":"meet123"},
    {"username":"Maharshi","password":"maharshi123"}
];

//creating the function login.
function login(){
    event.preventDefault();
      // in operator returns the value true if the specified property 
      //that is username and password in our case is in the object.
        for(var element in credentials){
            //storing the value of username and password in the var called element.
        var username=credentials[element].username;
        var password=credentials[element].password;

            var loginifno=document.getElementById("username").value;
            //console.log(loginifno);
            var passinfo=document.getElementById("password").value;
        //     console.log(passinfo);
        // console.log(username);
        // console.log(password);
            if(loginifno==username && passinfo==password){
                window.location.href="studentactivity.html";
                return false; 
            } 

        }

    alert("Invalid Credentials!! Try again");
}

