import sys
import time
sys.setrecursionlimit(1500000)

def show_number(n,i=0):
    if i<n:
        print(i)
        show_number(n,i+1)

def show_number_loop(n):
    for i in range(n):
        print(i)

#for recursion
start=time.time()
show_number(1000000)
end=time.time()

print(f" \n Time taken: {end -start:.2f} second for Recursion ")

#Using for loop
start=time.time()
show_number_loop(1000000)
end=time.time()

print(f" \n Time taken: {end -start:.2f} second for Recursion ")