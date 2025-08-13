let age: number = 25;
console.log(age);

let firstname: string = "Soykot";
console.log(firstname);

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

let fruits: Array<string> = ["Apper", "Banana"];
console.log(fruits);

//tuple
let person: [string, number] = ["soykot", 30];
console.log(person);

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;

console.log(Color[c]);

let randomValue: any = 10;
randomValue = "Podder";
console.log(randomValue);

function logMessage(): void {
  console.log("Logging message....");
}
logMessage();

let u: undefined = undefined;
let n: null = null;

console.log(n);
console.log(u);
