print("How many numbers do you want to check")
count = input()
count = int(count)
for i in range(count + 1):
	i = i + 1
	print(f"Enter number {i}:") 
	number = input()
	number = int(number)
	if number % 2 !=  0:
		print(f"The number {number} is odd")
	else:
		print(f"The number {number} is even")
print("End")
