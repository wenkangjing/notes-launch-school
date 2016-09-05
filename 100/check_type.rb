def add(a, b)
  a + b
end

def subtract (a, b)
  a - b
end

def multiply (a, b)
  a * b
end

p add("1", "2") #12
p add(1,2) #3

#p subtract("abc", "a") #error
p subtract(2,5) #-3

#p multiply("a", "b") #error
p multiply(2, 3) #6
