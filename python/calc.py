digits = input()
aa = str(digits)
aa.strip()
digits.replace(" ", "")
print(aa)
first = int(digits[0])
second = int(digits[2])
if digits[1] == "+":
	print(f"{first} + {second} = {first + second}")
else:
	print(f"{digits[2]}")
