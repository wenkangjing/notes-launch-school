
# case x
def validation_1(number)
  case number
  when 0..50
    puts "#{number} is between 0 - 50"
  when 51..100
    puts "#{number} is between 51 - 100"
  when 100..Float::INFINITY
    puts "#{number} is > 100"
  else
    puts "invalid"
  end
end

# case
def validation_2(number)
  case
  when number < 0
    puts "negative"
  when number <= 50
    puts "#{number} is between 0 - 50"
  when number < 100
    puts "#{number} is between 51 - 100"
  else
    puts "#{number} is > 100"
  end
end

# if elsif else end
def validation_3(number)
  if (number < 0)
    puts "negative"
  elsif number <= 50
    puts "#{number} is between 0 - 50"
  elsif number < 100
    puts "#{number} is between 51 - 100"
  else
    puts "#{number} is > 100"
  end
end

puts "Input a number between 0 - 100"
number = gets.chomp.to_i
validation_1 (number)
validation_2 (number)
validation_3 (number)


