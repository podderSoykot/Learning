class vehicle:
    def start(self):
        print("Vehicle started..")
class car(vehicle):
    def drive(self):
        print("Car is driving..")
class sportscar(car):
    def race(self):
        print("Sports car is racing..")

sc=sportscar()
sc.start()
sc.drive()
sc.race()
