arr = [1,3,2,4,6]
p arr

# solution 1
new_arr = arr.map do |item|
    item = item + 2
end

p arr
p new_arr

# solution 2
third_arr = []
arr.each do |item|
    third_arr << item + 2
end

p third_arr

