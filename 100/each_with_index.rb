array = [23,34,345,67,3,5,667,33]

puts "value no index"
array.each do |item|
  puts item
end

puts "value with index"
  array.each_with_index do |item, index|
  puts "array [#{index}] = #{item}"
end
