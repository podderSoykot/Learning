class Pizza:
    def __init__(self,flavour):
        self.flavour=flavour
        print(f"Pizza with {self.flavour} is ready!")
    def __del__(self):
        print(f"Pizza with {self.flavour} is now eatten or thrown away to the dastbin.")

x=input("Enter the flovour you wnat to eat:")
my_pizza=Pizza(x)
del my_pizza