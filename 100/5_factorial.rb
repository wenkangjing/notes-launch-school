# outputs the factorial of the numbers 5, 6, 7, and 8.
# ? how to write a functin in ruby ?
# ? is the solution end up with recursive function? don't upset me Ruby

puts "Solution 1----"
puts "5!= " + (5 * 4 * 3 * 2 * 1).to_s
puts "6!= " + (6 * 5 * 4 * 3 * 2 * 1).to_s
puts "7!= " + (7 * 6 * 5 * 4 * 3 * 2 * 1).to_s
puts "8!= " + (8 * 7 * 6 * 5 * 4 * 3 * 2 * 1).to_s


puts "Solution 2----"
f5 = 5 * 4 * 3 * 2 * 1
f6 = 6 * f5
f7 = 7 * f6
f8 = 8 * f7

puts "5!= " + f5.to_s
puts "6!= " + f6.to_s
puts "7!= " + f7.to_s
puts "8!= " + f8.to_s

