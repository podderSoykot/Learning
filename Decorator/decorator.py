def chocolate_layer(func):
    def wrapper(*args,**kwargs):
        print("Adding chocolet layer")
        result=func(*args,**kwargs)
        print("Chocolate layer done.")
        return result
    return wrapper

def cream_layer(func):
    def wrapper(*args,**kwargs):
        print("Adding Cream layer.")
        result=func(*args,**kwargs)
        print("Cream Layer done.")
        return result
    return wrapper

def white_chocolate(decorate_func):
    def new_decorator(func):
        def wrapper(*args,**kwargs):
            print("Adding White chocolate")
            result=decorate_func(func)(*args,**kwargs)
            print("White chocolate layer done")
            return result
        return wrapper
    return new_decorator
white_choco_chocolate_layer=white_chocolate(chocolate_layer)
@cream_layer
@white_choco_chocolate_layer
def cake_make(flavor, size):
    print(f"{size} {flavor} cake is ready!")

flavor = input("Enter the cake essence: ")  
size = input("Enter the size: ")
cake_make(flavor, size) 