class Animal:
    def speak(self):
        print("Animal speak")
class Dog(Animal):
    def speak(self):
        print("dog barks")
dog=Dog()
dog.speak()
