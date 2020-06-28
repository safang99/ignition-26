# Your code, here.
crypt_of_civilization = []
items = [
"Comptometer",
"Box of phonographic records",
"Plastic savings bank",
"Set of scales",
"Toast-O-Lator",
"Sample of aluminum foil",
"Donald Duck doll"
]
crypt_of_civilization.concat(items)
extra = ["Container of soda", "Lionel model train set", "Ingraham pocket watch"]
crypt_of_civilization.concat(extra)


puts "There are #{crypt_of_civilization.length} items in the array."
puts "The first item in the array is #{crypt_of_civilization.first}."
puts "The last item in the array is #{crypt_of_civilization.last}."
puts "The second item in the array is #{crypt_of_civilization[1]}."
puts "The third item in the array is #{crypt_of_civilization[2]}."
puts "The second to last item in the array is #{crypt_of_civilization[-2]}"
puts "The index of the Toast-O-Lator is #{crypt_of_civilization.index("Toast-O-Lator")}"

puts "#{crypt_of_civilization.include?("Container of soda")}"
puts crypt_of_civilization.include?("Toast-O-Lator")
puts crypt_of_civilization.include?("Plastic bird")

crypt_of_civilization.sort_by { |str| str.length}
crypt_of_civilization.sort
crypt_of_civilization.sort.reverse

i = 0
while i <= crypt_of_civilization.length
  puts crypt_of_civilization[i]
  i += 1
end
crypt_of_civilization.each { |item| puts item }

crypt_of_civilization.shift
crypt_of_civilization.pop
crypt_of_civilization.delete("Set of scales")
crypt_of_civilization.delete("Sample of aluminum foil")
