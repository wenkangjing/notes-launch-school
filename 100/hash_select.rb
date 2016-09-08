family = {  
  uncles: ["bob", "joe", "steve"],
  sisters: ["jane", "jill", "beth"],
  brothers: ["frank","rob","david"],
  aunts: ["mary","sally","susan"]
}

# my solution
immediate = family.select{ |k,v|
    k == :sisters|| k == :brothers
}

p immediate


# better solution
immediate = family.select do |k,v|
  k == :sisters || k == :brothers
end

arr = immediate.values.flatten

p arr