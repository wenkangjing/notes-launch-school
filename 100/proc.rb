
talk = Proc.new do
 puts "I am talking inside Proc"
end

talk.call

# param
talk = Proc.new do |name|
  puts "I am talk to #{name}"
end

talk.call("joe")
talk.call "john"

# proc + block
def take_proc(proc)
  [1,2,3,4,5].each do |n|
    proc.call n
  end
end


proc  = Proc.new do |n|
  puts "#{n}. called in proc"
end

take_proc(proc)