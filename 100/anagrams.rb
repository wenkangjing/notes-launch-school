# Write a program that prints out groups of words that are anagrams. Anagrams are words that have the same exact letters in them but in a different order. Your output should look something like this:

# ["demo", "dome", "mode"]
# ["neon", "none"]
# (etc)

words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

hash = {}

words.each do |w|
  array = []
  w.each_char do |c|
    array << c   
  end

  key = array.sort.join

  if hash.has_key?(key)
    hash[key] = hash[key] + "," + w
  else
    hash[key] = w
  end
end

hash.each_value do |v|
  puts v
end