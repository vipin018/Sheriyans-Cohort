//  Q1- *Age Category Message* – Ask the user for their age. If they are
// under 18, print “You are a minor.” If they are between 18 and 60,
// print “You are an adult.” If they are above 60, print “You are a
// senior citizen.” 

let age = prompt("Enter your age: ")

age < 18 ? console.log("You are a minor.") : age > 18 && age < 60 ? console.log("You're an adult.") : console.log("You're a senior citizen.")

