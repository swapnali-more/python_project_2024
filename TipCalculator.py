print("Welcome to the tip calculator")
bill = float(input("What was the total bill?"))
tip = int(input("What percentage tip would you like to give?"))
people = int(input("How many people to split the bill?"))

total = bill * (1 + (tip/100)) / people
final = "{:.2f}".format(total, 2)

print(f"Each person should pay: ${final}")
