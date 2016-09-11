# Use Ruby's Array method delete_if and String method start_with? to delete all of the words that begin with an "s" in the following array.

arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

arr.delete_if{|e| e.start_with?("s")}

p arr

new_arr = Array.new(arr)

new_arr.delete_if{|e| e.start_with?("w", "s")}
p new_arr