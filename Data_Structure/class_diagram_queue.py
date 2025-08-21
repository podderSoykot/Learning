class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)
        print(f"Enqueue: {item}")

    def dequeue(self):
        if self.is_empty():
            return "Queue is empty!"
        return self.queue.pop(0)

    def front(self):
        return self.queue[0] if not self.is_empty() else "Empty Queue!.."

    def rear(self):
        return self.queue[-1] if not self.is_empty() else "Empty Queue!.."

    def is_empty(self):
        return len(self.queue) == 0

    def display(self):
        print("Queue:", self.queue)


# --- Testing ---
q = Queue()
q.enqueue(11)
q.enqueue(12)
q.enqueue(13)
q.enqueue(14)

print("Dequeue:", q.dequeue())
q.display()
print("Front:", q.front())
print("Rear:", q.rear())
