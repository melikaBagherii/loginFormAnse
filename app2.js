function myfunction(){
    let username = localStorage.getItem('finalUsername');
    document.getElementById("demo").innerHTML="username: " + username;
    let password = localStorage.getItem('finalPassword');
    document.getElementById("hello").innerHTML="password: " + password;
}