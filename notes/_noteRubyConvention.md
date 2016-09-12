- tab = 2 spaces
- comment #
- lower case and underscore, snake_case
- const UPPERCASE
- hen working with do/end blocks, prefer { } when the entire code expression fits on one line.

https://github.com/bbatsov/ruby-style-guide

- utf-8, 2 spaces

- line break
  + control characters:
    CR = 0x0D(13) Carriage Return
    LF = 0x0A(10) Line Feed
  + CR LF Windows
  + LF Unix

- no ;
  + 1 expression per line
  + no inline comments

- single line class definition

  # good
  FooError = Class.new(StandardError)

- avoid single line method

  # good
  def some_method
    body
  end

  # good, exception, empty body method
  def no_op; end

- no space [()],use spaces {}

- no space !, no space range literals...

- align case and when

- no comma after last param

- try avoid line continuations \

- method chain, leading . and trailing .

- large number, num = 1_000_000

- no block comments, # per line

- ?: vs if/then/else/end

# single line
result = some_condition ? something : something_else

// multi line
result =
  if condition
    x
  else
    y
  end

- Use ! instead of not

- no or and, use && ||

