
function validate(){
    let username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if(password.length!=8){
        alert("password must have 8 characters!");
        return false;
    }
    
    // check if password contains at least a lowercase letter
    if(containNum(password)==false){
        alert("Password must have at least one digit!")
        return false;
    }

    // check if password contains at least a number
    if(containLower(password)==false){
        alert("Password must have at least one lowercase!")
        return false;
    }

    // check if password contains at least a uppercase letter
    if(containUpper(password)==false){
        alert("Password must have at least one uppercase!")
        return false;
    }
    
    localStorage.setItem('finalUsername',username);
    localStorage.setItem('finalPassword',password);
    window.open("welcome.html");
}


function containNum(str){
    return /[0-9]/.test(str)
}
function containUpper(str){
    return /[A-Z]/.test(str)
}
function containLower(str){
    return /[a-z]/.test(str)
}


function usernameValidation(input){
    // var regex = /[^0-9A-Za-z]/;
    var regex = /[^0-9A-Za-z#$&@^_*]/;
    input.value = input.value.replace(regex,"");
    
}

function passwordValidation(password){
    var regex = /[^0-9A-Za-z#$&@^_!%*()=+]/;
    password.value = password.value.replace(regex,"");
}



