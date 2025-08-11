class Flayer:
    def fly(self):
        print("Can fly")
class swimmer:
    def swim(self):
        print("Can swim")
class duck(Flayer,swimmer):
    def speak(self):
        print("Duck quacks")

dk=duck()
dk.fly()
dk.swim()
dk.speak()
