# Now, using the same array from #2, use the select method to extract all odd numbers into a new array.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

puts arr.select {|e| e % 2 != 0}

new_arr = arr.select do |n| 
  n % 2 != 0
end
