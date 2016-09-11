# turn it into a new array that consists of strings containing one word. (ex. ["white snow", etc...] → ["white", "snow", etc...]. 

a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'salted roads', 'white trees']

new_arr = []
a.map do |sentence|
  sentence.split(" ").each{|word| new_arr.push(word)}
end

p new_arr

#solution

a = a.map{|pair| pair.split}
a.flatten