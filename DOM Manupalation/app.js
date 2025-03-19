// querySelector: // (Ye method kisi specific HTML element ko select karne ke liye istemal hota hai.)
// .innerHTML     // (Ye property kisi HTML element ke content ko get ya set karne ke liye istemal hoti hai)

// var head = document.querySelector("#head")
// console.log(head.innerHTML)
// head.innerHTML = "Muhammad Hassan"


// -------------------------------------------------------------

// var p = document.querySelector("#para");
// p.innerHTML = "Hassan"


// -------------------------------------------------------------

// var h1 = document.querySelector("#head")

// function greetuser() {

// if (h1.innerHTML === "Hello DOM") {

//   h1.innerHTML = "Change thorugh js";
//   console.log (h1.innerHTML)

// } else {

//   h1.innerHTML = "Hello World";
//   console.log(h1.innerHTML)

// }

// }


// -------------------------------------------------------------



// var head = document.querySelector("#head");
// console.log(head.innerHTML = "Content Replace kia ha mena console me")

// head.innerHTML = "Hello INNER HTML"
// head.style.backgroundColor = "red"
// head.style.color = "white"



// -------------------------------------------------------------


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

function hide(){
    h1.innerHTML = ""
}