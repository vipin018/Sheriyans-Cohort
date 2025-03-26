/*
// Math.random() is a function that returns a random number between 0 and 1

console.log(Math.random());

// Math.random()*10 is a function that returns a random number between 0 and 10

console.log(Math.random() * 10);

// to get whole number instead of decimal we use Math.floor()

console.log(Math.floor(Math.random() * 10));

let a = 9;
console.log(`value of a is ${a}`)

*/

// RANDOM COLOR GENERATOR using DOM 
/*
const box = document.getElementById('box');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
 let c1 = Math.floor(Math.random()*256);
 let c2 = Math.floor(Math.random()*256);
 let c3 = Math.floor(Math.random()*256);
 box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

});

*/

// IPL 2025 WINNER PREDICTION
/*
let winner = document.getElementById('winner');
let team = document.getElementById('team');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let arr = ["CSK", "MI", "RCB", "RR", "SRH", "KKR", "DC", "PBKS", "GT", "LSG"];
    let winner = arr[Math.floor(Math.random()*arr.length)];
    team.textContent = winner;
});
*/

const iplTeams = [
    {
        name: "CSK",
        primaryColor: "#FFD700",
        secondaryColor: "#000080"
    },
    {
        name: "MI",
        primaryColor: "#004BA0",
        secondaryColor: "#FFFFFF"
    },
    {
        name: "RCB",
        primaryColor: "#DA291C",
        secondaryColor: "#3058CC"
    },
    {
        name: "KKR",
        primaryColor: "#3A225D",
        secondaryColor: "#D4AF37"
    },
    {
        name: "SRH",
        primaryColor: "#FB643E",
        secondaryColor: "#000000"
    },
    {
        name: "DC",
        primaryColor: "#17449B",
        secondaryColor: "#E71A2F"
    },
    {
        name: "RR",
        primaryColor: "#EA1A7F",
        secondaryColor: "#004BA0"
    },
    {
        name: "PBKS",
        primaryColor: "#D71920",
        secondaryColor: "#FFFFFF"
    },
    {
        name: "GT",
        primaryColor: "#0A2D4D",
        secondaryColor: "#E1B91A"
    },
    {
        name: "LSG",
        primaryColor: "#0078D7",
        secondaryColor: "#F2A900"
    }
];

let winner = document.getElementById('winner');
let team = document.getElementById('team');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let winner = iplTeams[Math.floor(Math.random()*iplTeams.length)];
    team.textContent = winner.name;
    team.style.backgroundColor = winner.primaryColor;
    team.style.color = winner.secondaryColor;
});