function greet(name, greetings) {
    return "Hello ".concat(name, ",").concat(greetings || "Welcome!");
}
function greetDefault(name, greeting) {
    if (greeting === void 0) { greeting = "Hi"; }
    return "".concat(greeting, " ").concat(name);
}
console.log(greet("Soykot")); // Hello Soykot, Welcome!
console.log(greet("Soykot", "Good morning")); // Hello Soykot, Good morning
console.log(greetDefault("Soykot")); // Hi Soykot
console.log(greetDefault("Soykot", "Hello")); // Hello Soykot
