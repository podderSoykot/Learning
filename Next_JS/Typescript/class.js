var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, I'm ".concat(this.name, " and I'm ").concat(this.age);
    };
    return Person;
}());
var p1 = new Person("Soykot", 30);
console.log(p1.greet());
