def greeting(name, options = {})
     p "hi " + name
    if !options.empty?
        p options
    end
end


greeting("Joe")
greeting("Matt", {age:30, weight: 50})