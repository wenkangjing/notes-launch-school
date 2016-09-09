# passing_block.rb

def take_block_1(&block)
  block.call
end

# pass in a block of code using do/end
take_block_1 do
  puts "Block being called in the method!"
end


def take_block_2(number, &block)
  block.call(number)
end

number = 42
take_block_2(number) do |num|
  puts "Block being called in the method! #{num}"
end
