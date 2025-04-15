document.getElementById('btn').addEventListener('click', () => {
       location.href = 'https://www.google.com';
    // location.reload();
});

document.getElementById('fwd').addEventListener('click', () => {
    history.forward();
});

document.getElementById('bwd').addEventListener('click', () => {
    history.back();
});

// user agent
console.log(`device info: ${navigator.userAgent}`)

// screen
console.log(`screen.width: ${screen.width}`)
console.log(`screen.height: ${screen.height}`)

// === LOCAL STORAGE ===

/* 
- localStorage is a web storage API that allows you to store data on the client side.
- the storage capacity of local storage is 5MB.
- 
*/
// set data
localStorage.setItem('name', 'John');
localStorage.setItem('age', '20');

let user = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(user);
console.log(age);

// remove item
localStorage.removeItem('age');
localStorage.clear();