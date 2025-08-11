let userName ="Bob" ;
let newName = "Alice";
userName &&= newName; // Only change if userName exists
console.log(userName); // "Bob"

let noName = "";
noName &&= "Will not update"; // "" is falsy
console.log(noName); // ""



