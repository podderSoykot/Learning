from collections import deque

queue=deque()

queue.append(10)
queue.append(20)
queue.append(30)

print (f"Queue oafter enqueue:{queue}")

print(f"dequeue:{queue.popleft()}")
print(f"Queue after Dequeue:{queue}")

#peek

print(f"font element:{queue[0]}")
print(f"font element:{queue[-1]}")
print(f"Queue:{queue}")