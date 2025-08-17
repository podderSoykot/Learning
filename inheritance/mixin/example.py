class JsonMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__) 
class ReprMixin:
    def __repr__(self):
        return f"<{self.__class__.__name__}{self.__dict__}>"
class User(JsonMixin,ReprMixin):
    def __init__(self,name,email):
        self.name=name 
        self.email=email

user=User("Soykot","diptopodder95@gmsil.com")
print(user.to_json())
print(user)