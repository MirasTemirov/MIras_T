Multiplying all the numbers in a list using reduce() function:


from functools import reduce

numbers = [2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)

print(product)



Counting the number of upper case and lower case letters in a string using isupper() and islower() functions:
string = "The Quick Brown Fox"

upper_count = sum(1 for letter in string if letter.isupper())
lower_count = sum(1 for letter in string if letter.islower())

print("Number of upper case letters:", upper_count)
print("Number of lower case letters:", lower_count)


Checking whether a passed string is palindrome or not using slicing:
string = "racecar"

if string == string[::-1]:
    print("String is a palindrome")
else:
    print("String is not a palindrome")



Invoking square root function after specific milliseconds using time.sleep() and math.sqrt() functions:

import time
import math

number = 25100
milliseconds = 2123

time.sleep(milliseconds/1000)
square_root = math.sqrt(number)

print(f"Square root of {number} after {milliseconds} milliseconds is {square_root}")


Checking if all elements of a tuple are true using all() function:
tuple1 = (True, False, True)
tuple2 = (True, True, True)

if all(tuple1):
    print("All elements of tuple1 are true")
else:
    print("Not all elements of tuple1 are true")

if all(tuple2):
    print("All elements of tuple2 are true")
else:
    print("Not all elements of tuple2 are true")


Output:

sql
Not all elements of tuple1 are true
All elements of tuple2 are true
