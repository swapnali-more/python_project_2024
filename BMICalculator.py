height = float(input("What's your height?"))
weight = int(input("What's your weight?"))

print(height, weight)

bmi = weight / (height * height)

print(int(bmi))

if bmi < 18.5:
    print(f"Your BMI is {bmi}, You are underweight")
elif bmi < 25:
    print(f"Your BMI is {bmi}, You have a normal weight")
elif bmi < 30:
    print(f"Your BMI is {bmi}, You are slightly overweight")
elif bmi < 35:
    print(f"Your BMI is {bmi}, You are obese")
else:
    print(f"Your BMI is {bmi}, You are clinically obese")