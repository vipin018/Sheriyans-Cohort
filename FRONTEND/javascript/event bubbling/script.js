//  BRING JSON DATA TO FRONTEND

let arr = [{
    name: "John",
    age: 20,
    city: "New York",
    img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9obnxlbnwwfHwwfHx8MA%3D%3D"
    
}, {
    name: "Mia",
    age: 21,
    city: "Los Angeles",
    img: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    name: "Robert",
    age: 22,
    city: "Chicago",
    img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    name: "Jannifer",
    age: 23,
    city: "San Francisco",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name: "Chris",
    age: 24,
    city: "Miami",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}];

let clutter = " "

arr.forEach(e => {
   clutter += `  <div id="div">
        <img src="${e.img}"
            alt="">
        <h1>${e.name}</h1>
        <p>${e.age}</p>
        <p>${e.city}</p>
    </div>`
});

document.body.innerHTML = clutter;


