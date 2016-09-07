arr = [1, 3, 5, 7, 9, 11]
number = 3
# inclues?
if arr.include?(3)
    puts "#{arr} contains #{number}"
else
    puts "#{arr} doesnt contains #{number}"
end

# each

arr.each  do |item|
    if item == 3
      puts "contains 3"
    end
end
