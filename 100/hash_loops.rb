# loops through a hash and prints all of the keys. 
# printing the values. 
# write a program that prints both.

hash = {hi: "Hi", hello: "Hello", greet: "How are you?"}

puts "keys:"
hash.each_key do |k|
   print "#{k} "
end

puts

puts "values:"
hash.each_value do |v|
  print "#{v} "
end

puts

puts "values:"
hash.each do |k,v|
  print "#{k} #{v} "
end

puts

# ok print just means output, not method

hash.each_key {|k| puts k}
hash.each_value {|v| puts v}
hash.each {|k,v| puts "#{k}:#{v}"}