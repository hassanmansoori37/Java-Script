// var email = document.querySelector('#email');
// var password = document.querySelector('#password');


// function login(){
//     console.log(email.value);
//     console.log(password.value);

// }




var input = document.querySelector("#username");
var h1 =document.querySelector("#greeting");


function userGreet(){
    h1.innerHTML = 'Hello ' + input.value
}