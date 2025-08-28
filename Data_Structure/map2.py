number = {
    "podder": 85,
    "A": 25,
    "B": 34,
    "C": 65,
    "D": 75
}

def grade(item):
    name, mark = item
    if mark < 33:
        gress = 33 - mark
        return f"{name} got {mark} → Fail ❌, after grace marks {mark + gress}"
    elif 33 <= mark <= 59:
        return f"{name}'s number is {mark} → Pass ✅, You got ⭐"
    elif 60 <= mark <= 69:
        return f"{name}'s number is {mark} → Pass ✅, You got ⭐⭐"
    elif 70 <= mark <= 79:
        return f"{name}'s number is {mark} → Pass ✅, You got ⭐⭐⭐"
    else:
        return f"{name}'s number is {mark} → Excellent 🌟"

# Apply map to dictionary items
results = map(grade, number.items())

# Convert map to list and print
for r in results:
    print(r)

f = lambda x: x**2
print(type(f))  # <class 'function'>

def g(x):
    return x**2
print(type(g))  # <class 'function'>

