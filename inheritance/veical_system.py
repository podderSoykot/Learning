class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
    
    def start_engine(self):
        print(f"{self.brand} {self.model} engine started.")
    
    def stop_engine(self):
        print(f"{self.brand} {self.model} engine stopped.")
    
    def vehicle_info(self):
        print(f"Vehicle: {self.brand} {self.model}, Year: {self.year}")

# Car inherits Vehicle
class Car(Vehicle):
    def __init__(self, brand, model, year, num_doors):
        super().__init__(brand, model, year)  # Call parent constructor
        self.num_doors = num_doors
    
    def vehicle_info(self):
        # Override vehicle_info method to add number of doors
        super().vehicle_info()
        print(f"Number of doors: {self.num_doors}")
    
    def open_trunk(self):
        print(f"The trunk of {self.brand} {self.model} is now open.")

# Truck inherits Vehicle
class Truck(Vehicle):
    def __init__(self, brand, model, year, max_load):
        super().__init__(brand, model, year)
        self.max_load = max_load  # in tons
    
    def vehicle_info(self):
        # Override to add max load info
        super().vehicle_info()
        print(f"Max load capacity: {self.max_load} tons")
    
    def load_cargo(self, weight):
        if weight <= self.max_load:
            print(f"Loading {weight} tons of cargo.")
        else:
            print(f"Cannot load {weight} tons! Max load is {self.max_load} tons.")

# Usage:

car = Car("Toyota", "Corolla", 2022, 4)
truck = Truck("Volvo", "FH16", 2020, 20)

car.start_engine()
car.vehicle_info()
car.open_trunk()
car.stop_engine()

print()  # blank line

truck.start_engine()
truck.vehicle_info()
truck.load_cargo(15)
truck.load_cargo(25)
truck.stop_engine()
