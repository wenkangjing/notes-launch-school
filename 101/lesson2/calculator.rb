# asks for two numbers
# asks for the type of operation to perform: add, subtract, multiply or divide
# displays the result

def prompt(message)
  Kernel.puts ("=> #{message}")
end

def valid_number?(number)
  number.to_i() != 0 
end

prompt("what is your name?")
name = Kernel.gets().chomp()

if name.empty?()
  prompt("calculating without a valid username")
else
  prompt("Hi #{name}")
end

# input number 1
loop do
  num1 = ''
  loop do
    prompt("first number")
    num1 = Kernel.gets().chomp().to_i()
    if valid_number?(num1)
      break
    else
      prompt("invalid number")
    end
  end

  #input number 2
  num2 = ''
  loop do
    prompt("second number")
    num2 = Kernel.gets().chomp().to_i()
    if valid_number?(num2)
      break
    else
      prompt("invalid number")
    end
  end

  #input operator
  loop do
    prompt("1) add 2) subtract 3) multiply 4) divide")
    op = Kernel.gets().chomp()
    if %w(1 2 3 4).include?(op)
      break;
    else
      prompt("invalid operator")
    end
  end


  # output
  case op
  when "1"
    prompt(num1 + num2)
  when "2"
    prompt(num1 - num2)
  when "3"
    prompt(num1 * num2)
  when "4"
    prompt(num1.to_f / num2)
  else
    prompt("invalid operator")
  end

  prompt("Perform another calculation? (Y)")
  break unless Kernel.gets().chomp().downcase() == 'y'
end

prompt("Goodbye #{name}")