/*
// selection of elements

let h =document.querySelector("h1");
console.log(h);
let body =document.querySelector("body");

// changing html

h.innerHTML = "Hello World";

// changing css

h.style.color = "hotpink";
h.style.fontSize = "50px";

// adding event listener

h.addEventListener("click", function(){
   h.innerHTML = "Namaste Duniya";
   h.style.color = "lime";
   body.style.backgroundColor = "white";
});

*/

// let box = document.getElementById("box");

// box.innerHTML = "Click Me";

// box.textContent = "<h1>Click Me</h1>";

// let btn = document.getElementById("btn");
// let box = document.getElementById("box");

// btn.addEventListener("click", function(){
//     box.style.backgroundColor = "black";
// })

let addBtn = document.getElementById("add-button");
let pTag = document.querySelector("#card-content p");

let flag = 0;

addBtn.addEventListener("click", function(){
    if(flag == 0){
        pTag.innerHTML = "Friend Added";
        pTag.style.color = "limegreen";
        addBtn.innerHTML = "Remove Friend";
        addBtn.style.backgroundColor = "red";
        flag = 1;
    }else{
        pTag.innerHTML = "Friend Removed";
        pTag.style.color = "red";
        flag = 0;
        addBtn.innerHTML = "Add Friend";
        addBtn.style.backgroundColor = "limegreen";
    }
})



