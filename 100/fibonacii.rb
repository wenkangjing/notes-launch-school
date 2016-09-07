# fibonacci.rb
# the n th number in 0 1 1 2 3 5 6 13 21

def fibonacci(number)
  if number < 2
    return number
  else
    return fibonacci(number - 1) + fibonacci(number - 2)
  end
end

puts fibonacci(7)