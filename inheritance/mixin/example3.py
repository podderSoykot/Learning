class helloMixin:
    def say_hello(self):
        print("Hello")

class Person(helloMixin):
    def __init__(self,name):
        self.name=name

p=Person("Soykot_Podder")
p.say_hello()