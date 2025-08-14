import time
from functools import wraps
from printer import Printer  # Importing the class

# Decorator to measure execution time
def timing_decorator(func): 
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"[INFO] Function '{func.__name__}' executed in {end_time-start_time:.4f} seconds")
        return result
    return wrapper

@timing_decorator
def fetch_data_from_api(api_url):
    time.sleep(2)
    return {"data": "Some API response"}

@timing_decorator
def process_data(data):
    time.sleep(1)
    return f"Processed {data}"

# Using class from printer.py
printer = Printer()
printer.print_something()

# Using decorated functions
data = fetch_data_from_api("https://example.com")
processed = process_data(data)
print(processed)
