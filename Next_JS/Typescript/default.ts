function greet(name: string, greetings?: string): string {
  return `Hello ${name},${greetings || "Welcome!"}`;
}

function greetDefault(name: string, greeting: string = "Hi"): string {
  return `${greeting} ${name}`;
}

console.log(greet("Soykot")); // Hello Soykot, Welcome!
console.log(greet("Soykot", "Good morning")); // Hello Soykot, Good morning

console.log(greetDefault("Soykot")); // Hi Soykot
console.log(greetDefault("Soykot", "Hello")); // Hello Soykot
