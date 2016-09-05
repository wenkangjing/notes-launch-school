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












