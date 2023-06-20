

var userName = document.querySelector("#userName");
var signinEmail = document.querySelector("#signinEmail");
var signinPassword = document.querySelector("#signinPassword");
var loginBtn = document.querySelector("#loginBtn");
var error = document.querySelector("#error");

var users = [];


if(localStorage.getItem("users") != null){
    users = JSON.parse(localStorage.getItem("users"));
    
}else{
    
    users = [];
    var user = 
    {
    name : null,
    email : null,
    password : null
    }
    users.push(user)
}


loginBtn.addEventListener("click", function(){

    if(isEmpty())
    {
        error.classList.remove('d-none')
        return true;
    }

    var email = signinEmail.value;
    var password = signinPassword.value;

    for(var i = 0 ; i<users.length ; i++){

        if(users[i].email.toLowerCase() == email.toLowerCase() && users[i].password == password){
        localStorage.setItem('activeSession', users[i].name)
        window.location="logout.html";
        
        }else{
            incorrectvalue.classList.remove('d-none')
        }
    }

})


function isEmpty(){

    if(signinEmail.value == "" || signinPassword.value == ""){
        return true
    }

    else{
        return false
    }
}


