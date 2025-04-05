// SET ATTRIBUTE

let img1 = document.querySelector("#image1");
let img2 = document.querySelector("#image2");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {

    let img1SRC = img1.getAttribute("src");
    let img2SRC = img2.getAttribute("src");
    
    img1.setAttribute("src", img2SRC);
    img2.setAttribute("src", img1SRC);

});








