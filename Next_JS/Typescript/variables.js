var age = 25;
console.log(age);
var firstname = "Soykot";
console.log(firstname);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
var fruits = ["Apper", "Banana"];
console.log(fruits);
//tuple
var person = ["soykot", 30];
console.log(person);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(Color[c]);
var randomValue = 10;
randomValue = "Podder";
console.log(randomValue);
function logMessage() {
    console.log("Logging message....");
}
logMessage();
var u = undefined;
var n = null;
console.log(n);
console.log(u);
