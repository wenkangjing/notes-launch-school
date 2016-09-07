# use recursive function to count down a number to zero

def countdown(num)
  puts num
  if (num > 0)
    countdown(num - 1)
  end
end

countdown(10)

