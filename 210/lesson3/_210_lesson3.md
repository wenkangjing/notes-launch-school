210 - Lesson 3 : Exercises: Logic and Flow Control
====================================

# 1	Chrome Developer Tools

## Tips
- PAUSE on exception
- Console as runtime js environment

- Async call stack provide better visibility

- proper name ease the debuger

## 

Source break
- embedded `debuger;` 
- toggle to break

DOM break: 
- right click on tag
- select break on ...


XHR break (XMLHttpRequest)
- XMLHttpRequest or XHR is a javascript API used for communication between the client and the server
- part of AJAX

Event break

Async Call Stack
the async call stack feature provides increased visibility into the full call stack of asynchronous functions.

Blackbox

Live editing

- CTRL + S to resume the debuger
- changes patch to Browser only not original file 


# 2	JavaScript Coding Styles

# 3	Odd Numbers

To test whether a number is odd, you can use the remainder operator. 

# 4	Multiples of 3 and 5

Q: How to determine whether an integer is a multiple of a number?

A number is a multiple of 3 if the remainder when divided by 3 is 0; it is a multiple of 5 if the remainder when divided by 5 is 0. In JavaScript, you can test this using the remainder operato

# 5	Print Multiples

This solution must step through every number between 100 and 0. Alternatively, you can determine the number's largest multiple that is less than 100, then start the loop with that multiple. With each iteration of the loop, you can decrement the number by the argument; when the result is negative, you can quit.

As above, we must check each multiple to determine whether it is odd. If it is odd, we log it.

# 6	FizzBuzz

In this exercise, you must loop through the integers 1 to 100, inclusive. For each number, check whether it is a multiple of 3, 5, or both, then log the appropriate number or string. Pay attention to the order of your checks, and be mindful that your loop includes both 1 and 100.


# 7	Prime Check

A prime number is a number that has no positive divisors other than 1 and itself. By definition, neither 0 nor 1 is prime. The easiest way to make this determination is to loop from 2 up to but not including the number you are testing. With each value of the loop index, check whether it is a divisor of the prime number candidate. If it is, terminate execution immediately and return false. If you reach the end of the loop without finding a divisor, the number is prime, and you can return true.

Guard Clause 
- a chunk of code at the top of a function (or block) 
- serves a similar purpose to a Precondition.

# 8	XOR

^ (Bitwise XOR)

The || operator returns 
- true if **either or both** of its operands are truthy, 
- false if **both** operands are falsey. 

The && operator returns 
- true if **both** of its operands are truthy, 
- and false if **either** operand is falsey. 

"exclusive or", or XOR.
- true if **exactly one** argument is truthy
- false otherwise. 

![XOR](../../kb/js/xor.jpg)

>The two exclamation points (!!) coerce the return value to a boolean value (true or false). 
>
>By default, **logical operators return the value of the values of the operands**, not a boolean value. 
>
>Without the !!, the function returns the truthy (i.e 'a' or 2) or falsey (i.e '') values; the !! guarantees that the result is boolean.

|| and && are so-called **short circuit operators**; JavaScript evaluates the second operand only when needed. For instance, in a || b, you don't need to evaluate b if a is truthy. Does the isXor function perform short-circuit evaluation? Why or why not? Does short-circuit evaluation in XOR operations make sense?

  Answer: No, xor does not perform short-circuit evaluation, because it only occurs in one or both value/s are same boolean value. XOR is a logical operation that value1 and value2 are opposite boolean value, which means JS must know both value during evaluating, therefore, short circuit is not appled in XOR. 

Can you think of a situation where a boolean isXor function is useful? 



# 9	Guessing the Password



# 10	Student Grade

# 11	Greatest Common Divisor

辗转想除法

# 12	Goldbach Numbers
Goldbach's Conjecture (歌德巴赫猜想): Every even integer greater than 2 can be expressed as the sum of two primes.

Write a function named checkGoldbach() that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer n, and logs all combinations of two prime numbers whose sum is n. Log the prime pairs with the smaller number first. If n is odd or less than 4, your function should log null.


# 13	Pattern Generation

One way to think through this type of problem is to write a formal description of the required output. For example, we can describe it this way:

We must output n lines of n characters.

If the line number is i, then this line should have the digits from 1 to i followed by enough * characters to fill out the line to a total length of n characters. This description should provide an idea of what you need to do in your program.

# 14	Index of Substring

```js
indexOf('Some strings', 's');      // 5
indexOf('Blue Whale', 'Whale');    // 5
indexOf('Blue Whale', 'Blute');    // -1
indexOf('Blue Whale', 'leB');      // -1
```

Don't dive too fast into coding; try to solve this logically step-by-step. For instance, here is a straightforward algorithm for indexOf:

Assume that the first string's length is m and the second string's length is n.
Iterate from the beginning of the first string and work to the end.
During each iteration:
Compare the n characters starting at the current position in the first string with the n characters of the second string.
If all n characters match, return the index of the current character in the first string
Otherwise, continue iteration.
The last character we need to check in the first string is the character at index m - n.
Return -1 if you cannot find the second string in the first string.
For the lastIndexOf function, the algorithm is similar. However, for this function we start with the m - nth character in the first string and work backward to index 0.

Thinking about the algorithm before you write code helps you solve the problem logically. You don't have to worry about the programming aspect. Once you have the algorithm, you can then use it as a "blueprint" and translate it to code.

# 15	Trimming Spaces


# 16	Splitting a String
# 17	Repeating Strings
# 18	String StartsWith
# 19	Converting Strings to Lower Case
# 20 	Substring (1)
# 21	Substring (2)
# 22	Code Review: Rot13 Cipher
# 23	Reference Solution: Rot13 Cipher