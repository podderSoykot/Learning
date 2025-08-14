# my_set=set()
# my_set.add((1,2,3))
# print(f"Sets printed are{my_set}")
# my_set.add(4)
# print(f"Sets printed are{my_set},after {my_set}")


# my_set2=set()
# fs=frozenset([1,2,3,4])
# my_set2.add(fs|frozenset([4]))
# print(f"mutable type inside a tuple{my_set2}")


# for s in list(my_set2):
#     new_s=s|frozenset([5])
#     my_set2.add(new_s)
#     new_s

# print(my_set2)

#cna't modify the original tuple inside the set, just only can add inside the tuple.

s = "Soykot_Podder"
lst = [ord(c) for c in s]  # avoid using `list` as variable name

i, j = 0, len(lst) - 1
while i < j:
    # Correct XOR swap
    lst[i] = lst[i] ^ lst[j]
    lst[j] = lst[i] ^ lst[j]
    lst[i] = lst[i] ^ lst[j]
    i += 1
    j -= 1

reversed_s = "".join(chr(c) for c in lst)
print(reversed_s)

x="podder"
x=list(x)
print(x)

lst2=[ord(d) for d in x]
i,j=0,len(lst2)-1
while i<j:
    lst2[i]=lst2[i]^lst2[j]
    lst2[j]=lst2[i]^lst2[j]
    lst2[i]=lst2[i]^lst2[j]
    i+=1
    j-=1
reversed_z="".join(chr(d) for d in lst2)
print(reversed_z)