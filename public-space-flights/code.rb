# YOUR CODE GOES HERE

#Part 1
puts "Hello there traveler."
puts "How many adult tickets would you like?"
adult_tickets = gets.chomp.to_i
puts "How many children tickets do you need?"
children_tickets = gets.chomp.to_i
puts "Here are your #{adult_tickets} adult tickets and #{children_tickets} children tickets"

#Part 2
dehydrated_banana = 1.27
tofu_cake = 4.17
cheese_spread = 3.79
dehydrated_ice_cream_sandwich = 0.75

puts "The price of two tofu cakes and two dehydrated ice cream sandwiches is #{(dehydrated_ice_cream_sandwich * 2) + (tofu_cake * 2) }"
puts "The price of eight packets of cheese_spread and a dehydrated_banana is #{(8 * cheese_spread) + dehydrated_banana}"
puts "The price of three of each item on the menu is #{(dehydrated_banana + dehydrated_ice_cream_sandwich + tofu_cake + cheese_spread) * 3}"
