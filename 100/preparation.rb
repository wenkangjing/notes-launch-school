require "pry"
a = [1, 2, 3]
a << 4

## execution will pause here, like a breakpoint
binding.pry
puts a
