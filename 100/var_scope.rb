# scope 1
puts "test 1 ----"
a = 5
3.times do |n|
  a = 3
  puts n
end
puts a

# scope 2
puts "test 2 ----"
arr = [1, 2, 3]
for i in arr do
  a = 5
end
puts a