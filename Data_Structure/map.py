numbers=[1,2,3,4,5,6,7]

def sequence(x):
    return x**2

square_number=map(sequence,numbers)
print(list(square_number))

#map using lambda 

square_number2=map(lambda x:x **3,numbers)
print(list(square_number2))


