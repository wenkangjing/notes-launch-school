
# break
i = 0
loop do
  puts "loop 5 times"
  i = i + 1
  if i == 5
    break
  end
end

# skip
x = 0
loop do
  x = x + 1
  if x == 3
    next
  end
  puts x
  if x == 5
    break
  end
end

# infinit loop
# loop do
#   puts "infinit loop until Ctrl C"
# end

