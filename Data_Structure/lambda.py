square = lambda x: x**2
x=square(5)
print(x)  # 25

add=lambda a,b:a+b
print(add(3,7))

print((lambda x,y:x*y)(3,4))


numbers=[1,12,3,4,5,6,7,8,9]
squared=list(map(lambda x:x**2,numbers))
print(squared)