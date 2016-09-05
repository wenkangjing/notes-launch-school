# return

def add_three(number)
  number + 3
  # puts return nil, can't chain 
  # puts number + 3
end

returned_value = add_three(4)
puts returned_value

add_three(5).times {p 'this should print 8 times'}

p "Jamie Wen".length.to_s 
