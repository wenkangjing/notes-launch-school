
puts "input a number"
a = gets.chomp.to_i
# example 1
case 5
when 5
  puts "a is 5"
when 6
  puts "a is 6"
else 
  puts "a is neither 5 nor 6"
end

# example 2
answer = case a
when 5 
  "a is 5"
when 6
  "a is 6"
else
  "not 5 or 6"
end

puts answer
