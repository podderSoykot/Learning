#Hierarchical inheritance
class Animal:
    def eat(self):
        print("Animal eat.")
class Dog(Animal):
    def speak(self):
        print("Dog barks.")
class Cat(Animal):
    def speak(self):
        print("Cat Meows")
dog=Dog()
cat=Cat()

dog.eat()
dog.speak()
cat.eat()
cat.speak()