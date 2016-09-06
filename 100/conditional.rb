puts "put a number"
a = gets.chomp.to_i

# if
if a == 3
  puts a
end

# if else
if a ==3
  puts "a is 3"
else
  puts "a is not 3"
end

# if elseif
if a == 3
  puts "a is 3"
elsif a == 4
  puts "a is 4"
end

# if elseif elseif elseif else
if a == 3
  puts "a is 3"
elsif a == 4
  puts "a is 4"
elsif a == 5
  puts "a is 5"
else 
 puts "a is other"
end

# one line, must use then
if a == 3 then puts "a = 3" end

# if at the end
puts "a is 3" if a == 3

#unless
puts "a is not 3" unless a == 3

