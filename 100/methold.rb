# mutate
a = [1, 2, 3]

def mutate (array)
  array.pop
end

def no_mutate(array)
  array.last
end

p "before mutate #{a}"
p mutate(a)
p "after mutate  #{a}"

p "before no_mutate  #{a}"
p no_mutate(a)
p "after no_mutate  #{a}"

# immutate

def some_method(number)
  number = 7
end

a = 5
p a
p some_method(a)
p a

# p vs puts
p "this is printed by p"
puts "this is printed by puts"

