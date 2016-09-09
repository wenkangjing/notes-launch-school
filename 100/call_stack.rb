# call stack
def greet(person)
  puts "Hello, " + person
end

greet("John")
#greet(1)

def space_out_letters(person)
  letters =  person.split("").join(" ")
  puts letters
  return letters
end

def greet(person)
  return "H e l l o, " + space_out_letters(person)
end

def decorate_greeting(person)
  puts "" + greet(person) + ""
end

decorate_greeting("Tee")
decorate_greeting(1)