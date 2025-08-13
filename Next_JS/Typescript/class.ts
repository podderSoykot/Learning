class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, I'm ${this.name} and I'm ${this.age}`;
    }
}

const p1 = new Person("Soykot", 30);
console.log(p1.greet());
