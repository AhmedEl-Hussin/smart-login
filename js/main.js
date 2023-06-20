

var signupName = document.getElementById('signupName').value;
var signupEmail = document.getElementById('signupEmail').value;
var signupPassword = document.getElementById('signupPassword').value;
var emailExist = document.getElementById('emailExist');
var error = document.getElementById('error');
var succsess = document.getElementById('succsess');
var data={userName:signupName,email:signupEmail,password:signupPassword}

var signUnBtn = document.getElementById('signUnBtn');

var personalData = [];


if(JSON.parse(localStorage.getItem('users')) != null)
{
    personalData =JSON.parse(localStorage.getItem('users'));
}


signUnBtn.onclick = function(){
    console.log("aaaaa");
   
    fetch("http://localhost:5000/auth/signup", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => console.log(response.json()))
  .catch((error) => {
    console.error("Error:", error);
  });
    // isEmpty();
  

}


function newData()
{
    personalInfo = 
    {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }

    if (personalData.length == 0) {
        personalData.push(personalInfo)
        localStorage.setItem('users', JSON.stringify(personalData))
        succsess.classList.remove('d-none');
    }
}


function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        error.classList.remove('d-none');
        return false
    } else {
        error.classList.add('d-none');
    }
}

// for check email is exist
function isEmailExist() {
    for (var i = 0; i < personalData.length; i++) {
        if (personalData[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

