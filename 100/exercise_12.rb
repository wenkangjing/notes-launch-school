contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

array = []
contact_data.each do |data|
  h = {}
  h[:email] = data[0]
  h[:address] = data[1]
  h[:phone] = data[2]
  array.push(h)
end

index = 0
contacts.each do |k,v|
  # must use contacts[k] to modify the original element
  contacts[k] = array[index] 
  index = index + 1
end

p contacts