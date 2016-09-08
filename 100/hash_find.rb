# What method could you use to find out if a Hash contains a specific value in it? 

def contains(hash, value)
  hash.has_value?(value)
end

hash = {name: "Sol", city: "Mel", address:"nil"}
value = "Tom"

if hash.has_value?(value)
  puts "#{hash} contains value #{value}"
else
  puts "#{hash} doesn't contain value #{value}"
end