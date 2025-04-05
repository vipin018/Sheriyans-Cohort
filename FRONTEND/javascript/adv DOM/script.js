// SET ATTRIBUTE and GET ATTRIBUTE
/*
let img1 = document.querySelector("#image1");
let img2 = document.querySelector("#image2");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {

    let img1SRC = img1.getAttribute("src");
    let img2SRC = img2.getAttribute("src");

    img1.setAttribute("src", img2SRC);
    img2.setAttribute("src", img1SRC);

});
*/
// CREATE ELEMENT
/*
let h1 = document.createElement("h1");
h1.innerHTML = "Helloo Jii";

document.body.append(h1);

let img = document.createElement("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1743341720521-21fddab6d0bf?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

document.body.append(img);

img.style.width = "400px";
img.style.height = "500px";
img.style.objectFit = "cover";
img.style.objectPosition = "center";

*/
// CREATE ELEMENTSSS

/*
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

    let x = Math.random() * 90;
    let y = Math.random() * 90;
    let scale = Math.random();


    let img = document.createElement("img");
    img.setAttribute("src", "img.png");
    img.style.position = "absolute";
    img.style.height = "100px";
    img.style.left = `${x}%`;
    img.style.top = `${y}%`;
    img.style.scale = `${scale}`;

    document.body.append(img);
})
*/

// EVENTSSS

let div = document.querySelector("#div");

div.addEventListener("click", () => {
    console.log("clicked");
})
div.addEventListener("mouseover", () => {
    console.log("mouseover");
})

div.addEventListener("mouseout", () => {
    console.log("mouseout");
})

div.addEventListener("mousemove", () => {
    console.log("mousemove");
})

div.addEventListener("dblclick", () => {
    console.log("dblclick");
})

document.body.addEventListener("keypress", (e) => {
    console.log(e.key);
})
