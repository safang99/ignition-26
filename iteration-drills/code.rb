#  Write Ruby<->English answers here as comments in your code

# 1)
# * numbers is an array
# numbers.each do |number|
#   puts 3 * number
# end
# For every element in the array numbers called number, print out "number" multiplied 3 times.

# 2)
# * names is an array
# names.each do |name|
#   puts name.length
# end
#For each "name" in the "names" array, print the length of that "name"

# 3)
# * numbers is an array
# sum = 0
# numbers.each do |number|
#   sum += number
# end
# puts sum
#For each "number" in the "numbers" array, add its value to the sum variable.  Then return the sum variable which is the total sum of the elements in the numbers array

# 4)
# * hash is a hash
# hash.each do |name, age|
#   puts "#{name} is #{age} years old."
# end
#For each key, value pair in the hash, print out a string containing the key(name) and its corresponding value(age).

# 5)
# * account is a hash
# sum = 0
# account.each do |transaction, value|
#   sum += value
# end
# puts "The value the account is #{sum}"
# For each key, value pair in the hash, add the value to the sum variable.  At the end return the sum variable which now contains the current value of the account.

# 6)
# * addresses is a hash
# addresses.each do |name, address|
#   puts "#{name} lives on #{address}"
# end
#For each key, value pair in the hash, print out a string containing the key(name) and its corresponding value(address).


# Write Ruby code using .each to build the described code. You can create your own data if you want to test it out in irb!

# 1.)For every element 'word' in the array 'sentences' print out the word.
# sentences.each { |word| puts word }

# ma_area_codes = [617, 508, 857]
# phone_numbers = [6175556789, 5088471234, 4132345678, 6174329876, 8575557777, 1235434545]
# 2.)For every element 'phone_number' in the array 'numbers' print out the phone number if it is a MA area code.
  # phone_numbers.each do |phone_number|
  #   if ma_area_codes.include?(phone_number.to_s[0..2].to_i)
  #     puts phone_number
  #   end
  # end

# 3.)For every element number in the array 'numbers' print out every odd number.
# numbers.each { |num| puts num if num.odd?}

# 4.)For every name-age pair in the hash 'ages', print out each pair.
# ages.each {|name, age| puts "#{name}: #{age}"}

# 5.)For every name-age pair in the hash 'ages', print out a pair if the age is > 10.
#ages.each {|name, age| puts "#{name}: #{age}" if (age > 10)}

# 6.)For every name-age pair in the hash 'ages', print out a pair if the age is even.
# ages.each {|name, age| puts "#{name}: #{age}" if age.even?}


# Write Ruby code to find out the answers to the following questions:
array = [28214, 63061, 49928, 98565, 31769, 42316, 23674, 3540, 34953, 70282, 22077, 94710, 50353, 17107, 73683, 33287, 44575, 83602, 33350, 46583]

# * What is the sum of all the numbers in `array`?
puts array.sum
# * How would you print out each value of the array?
array.each { |ele| puts ele }
# * What is the sum of all of the even numbers?
even_count= 0
array.each do |num|
  if num.even?
    even_count += num
  end
end
puts even_count
# * What is the sum of all of the odd numbers?
odd_count= 0
array.each do |num|
  if num.odd?
    odd_count += num
  end
end
puts odd_count
# * What is the sum of all the numbers divisble by 5?
div_by_5_sum= 0
array.each do |num|
  if num % 5 == 0
    div_by_5_sum += num
  end
end
puts div_by_5_sum
# * What is the sum of the squares of all the numbers in the array?
sqr_sum = 0
array.each { |num| sqr_sum += Math.sqrt(num) }
puts sqr_sum






array = ["joanie", "annamarie", "muriel", "drew", "reva", "belle", "amari", "aida", "kaylie", "monserrate", "jovan", "elian", "stuart", "maximo", "dennis", "zakary", "louvenia", "lew", "crawford", "caitlyn"]

# Write Ruby code to find out the answers to the following questions:

# * How would you print out each name backwards in `array`?
array.each { |name| puts name.reverse }
# * What are the total number of characters in the names in `array`?
char_sum = 0
array.each { |name| char_sum += name.length }
puts char_sum
# * How many names in `array` are less than 5 characters long?
puts array.count { |name| name.length < 5 }
# * How many names in `array` end in a vowel?
puts array.count { |name| "aeiou".include?(name[-1])}
# * How many names in `array` are more than 5 characters long?
puts array.count { |name| name.length > 5 }
# * How many names in `array` are exactly 5 characters in length?
puts array.count { |name| name.length == 5 }
