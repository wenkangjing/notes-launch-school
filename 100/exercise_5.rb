# Get rid of "11". And append a "3".

arr = [2, 4, 12, 11, 432, 111, "11"]

arr.map do |e|
  if e == 11
    arr.delete(11)
    arr.push(3)
  end
end

p arr