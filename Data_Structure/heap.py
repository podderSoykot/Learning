import heapq
heap=[1,2,3,4,5,6,7,8,9]
heapq.heapify(heap)
print(heap)
heapq.heappush(heap,10)
print(heap)
heapq.heappop(heap)
print(heap)
heapq.heappushpop(heap,0)
print(heap)
heapq.heappushpop(heap,5)
print(heap)