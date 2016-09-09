names = ['bob', 'joe', 'steve', nil, 'frank']

# catch exception
names.each do |n| 
  begin
    puts n + n.length.to_s
  rescue => exception
    puts exception
  end
end

# inline rescue
zero = 0
zero.each{|e| puts e} rescue puts "wrong"

[1,2,3].each{|e| puts e} rescue puts "wrong"

# pre defined exception

def divide(number, divisor)
  begin
    answer = number / divisor
  rescue ZeroDivisionError => e
    puts e.message
  rescue => exception
    puts exception
  end
end

puts divide(16, 4)
puts divide(4, 0)
puts divide("a", 7)
puts divide(16, nil)
puts divide(16, "divisor")