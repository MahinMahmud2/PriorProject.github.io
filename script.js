let bodyRef = document.querySelector("body")
let butRef = document.querySelector("button")
let textBox = document.getElementById("text-box");
let navRef = document.getElementById("navone1")


butRef.onclick = function(event){

    event.preventDefault();

    let userInput = textBox.value;

    bodyRef.style.backgroundColor = userInput;
    navRef.style.backgroundColor = userInput;
}


