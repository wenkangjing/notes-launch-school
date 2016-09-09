# Write a program that prints out groups of words that are anagrams. Anagrams are words that have the same exact letters in them but in a different order. Your result should look something like this:

# ["demo", "dome", "mode"]
# ["neon", "none"]
# (etc)

words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

result = {}

words.each do |word|
  # replace with "word",split(''),sort().join()
  # array = []
  # w.each_char do |c|
  #   array << c
  # end

  # key = array.sort.join
  # puts key

  key = word.split('').sort.join
  puts "key is " + key

  if result.has_key?(key)
    result[key].push(word) #result[key] = result[key] + "," + w
    puts "push word " + word
  else
    result[key] = [word] # make sure it is an array
    puts "insert word " + word
  end
end

result.each_value do |v|
  puts v
end

return

# solution

result = {}

words.each do |word|
  key = word.split('').sort.join
  if result.has_key?(key)
    result[key].push(word)
    puts "push word " + word
  else
    result[key] = [word]
    puts "insert word " + word
  end
end

result.each do |k, v|
  p v
end