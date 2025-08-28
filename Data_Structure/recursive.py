arr=[1,2,3,4,5,6,7,8,9]

def show_values(a,i=0):
    if i<len(a):
        print(a[i])
        show_values(a,i+1)

show_values(arr)