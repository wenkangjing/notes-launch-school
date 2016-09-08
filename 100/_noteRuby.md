## History
Matz (Japan) Ruby
David Heinemeier Hansson (Danish) Ruby on Rails
Written in C
DSL - Domain Specific Language


```ruby
# namespace
::

# class method ::bala = static method
::
String.new("blue")
String.try_convert("red")

# instance method #bala = member method
"world wide web".split

```

## irb

Pry for debugging
sudo gem install

binding.pry = breakpoint = open a pry session
rm a_folder // x
rmdir a_folder // must be empty folder
rm -r a_folder // folder and everything inside

"" allow string interpolation
"{#fname #lname}"
JS: "${js expression}"

```ruby
a = "ten"
"My fa skem #{a}"
```

- Symbols

:a_symble
:"this is also a symbol"

- nil

nothing, empty, unknown
"Hello".nil? # false

"".nil? false

% reminder operator

- Type Conversion

'12'.to_i
"12 is a number".to_i # Just return 12 and ignore the rest
123.to_s # "123":w

- Array

[]

Hash (key-value pair)
:keyname
=> assign
{:dog => "barks", :cat => "meows", :pig => "oinks"}

## Variables

gets // with new line
gets.chomp // w/o new line

- scope

each, times and other methods, followed by {} or do/end, that's when a new block is created.
for...do/end is won't create a new inner scope


- type of variables

constants
  + VAR_NAME = 'hohoho hohohoh'

global variables
  + $var_name

local variables
  + var_name = 'I am a normal variable'

class variables
  + @@instances = 0

instance variables
  + @var_name = 'bala'

## Metholds


```ruby
def foo # no parameters
  # body
end

def say(words) # no type needed
  puts words
end

def say(words='hello') # default
  puts words + '.'
end

# usage, () is optional
say ("Hi")
say "hello"

```

p vs puts vs prints
p with quotes, p returns what just printed
puts w/o quptes, put returns nil
print = puts, return nil but no new line

Method cannot modify arguments like C

pass by value or reference

> do both
> must check doc
> what the?

return
  - return type is not needed in method defination
  - no type in function params

> check return values in irb

> Ruby methods ALWAYS return the evaluated result of the **last line**
> of the expression unless an explicit return comes before it.
> **important** more like a default return value = last expression

Chaining methods
```ruby
add_three(5).times {p puts "print 8 times"}
"hi there".length.to_s      # returns "8" - a String
```


## Flow Control

Conditionals
  - < > <= >= == != && ||
  - if end
  - if else end
  - if elsif elsif else end
  - unless is !if

> must use "then" keyword when using 1-line syntax
> if at the end
> unless is oppsite of if statement

```ruby
if a == 3
  puts a
elsif a ==4
  puts a
else
  puts a
end

if x == 3 then puts "x is 3" end
puts "x is 3" if x == 3
puts "x is NOT 3" unless x == 3
```
Comparasion

Combining Expressions
  - and or, && ||

Ternary operator
  - ? :

Case statement
  - same as if elsif elsif else end
  - **case**
> case a
> when 5
> when 6
> else
> end

false is
  - false
  - nil
  - empty string is true

case n when <value> // compare value
case when <condition> //compare condition


## Loop
- loop
- while
- until, opposite of while
- 5.times
- do while

```ruby
loop do
  // next = continue = skip this iteration
  // break
end

while <condition>
end

until <condition>
end

for i in 1..100 do
end

```

Iterators
  - eachs
  - |item|

```ruby

list = [1,2,34,4,5]
list.each{|item| puts item}


list.each do |item|
  puts item
end
```

Recursion
- fibonacii sequence

Exercises
1. lists.each do |item| // item is iterator, cannot modify the original value

missing pair end
> syntax error, unexpected end-of-input, expecting keyword_end

## Array
  - mixed type
  - []
  - .first, .last // like C# LINQ
  - .pop, .push // like stack
  - array << 'new items' is equle to .push
  - .map, .collect return new array
  - .delete(item), .delete_at(index)
  - .uniq, returns a new distict array
  - .uniq! Removes duplicate elements from self.

iterating array
  - each // iterating everying
  - select // iterating with conditions, like SQL, LINQ
  - each, each_index, each_with_index

Methold with a !
  - bang operator
  - change self permanently
  - danger, check doc

Mutating the callers
- destructive methods
- e.g. pop, push

Nested array

- unshift // prepeend
- push // append
- includes? // contains
- flatten // nested array to one-D array
- [1,2,3].product([4.5]) // idea, 141524253435

each vs map
  - each returns the original
  - map return new array // hint: map to a new arrays
  - both won't change original

retrieve index by value: arr.indeox(i) **good**
retrieve value by index: arr[i]


each do |item|

p arr // in one line []
puts arr // in multiple lines

> when not sure, test in irb, check ruby doc 

## Hash
map in JS
dictionary in C#

{:key=>value} // odd to be honest
or
{key:value} // haha JSON

hash[:key]

person.each do |key, value|

> array: order, stack or queue
> hash: use symbol as key


hash.flatten vs array.flatten

merge:return new array, not change original

merge!:changed self