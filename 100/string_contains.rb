# if the sequence of characters "lab" exists in the following strings. If it does exist, print out the word.

array = [
  "laboratory",
  "experiment",
  "Pans Labyrinth",
  "elaborate",
  "polar bear"
]

# regex
array.each{|e| puts e if /lab/.match(e)}

# include
array.each{|e| puts e if e.include?('lab')}