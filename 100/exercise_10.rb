# Can hash values be arrays? Can you have an array of hashes? (give examples)

h = {a:[1,1,1], b:[2,2,2], c:[3,3,3], d:[4,4,4]}

h.values.each{|e| p e}

arr = [{a:1, b:2, c:3, d:4}, {aa:11, bb:22,cc:33,dd:44}]

arr.each{|e| p e}