var name="podder"
console.log(name)

let age=25;
console.log(age)

const country="Bangladesh"
console.log(country)

let score=25;
if(score>80){
    console.log("working")
}

let fruit= "apple";
switch(fruit){
    case "banana":
        console.log("Yello fruit")
    case "apple":
        console.log("red or green fruit")
        break;
    default:
        console.log("Unknown fruit")
}

for (let i=0; i<3; i++){
    console.log("count" +i)
}

function square(x) {
  if (x === undefined) {
    throw new Error("Missing parameter x");
  }
  return x * x;
}

console.log(square(4)); // Outputs: 16

try {
  let result = square(4); // Now this throws error
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error.message);
}
// Output: An error occurred: Missing parameter x
