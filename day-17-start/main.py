class User:
    def __init__(self, user_id):
        self.id = user_id

user_1 = User('001')

user_2 = User('002')

print(user_1.id, user_2.id)