#Append "11" to the end of the original array. Prepend "0" to the beginning.

# wrong, array not element
arr = ["Tina", "Jamie", "Josh", "Jason", "Jim"]
arr.map! do |e|
  e.concat("11")
  e.prepend("0")
end

p arr

arr.push(11)
arr << 12

# like strign prepend
arr.unshift(0)
p arr