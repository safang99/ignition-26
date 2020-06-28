# Part 1
items =  [
  "old paperback book",
  "potato",
  "red onion",
  "dried lemon",
  "frankincense",
  "moon dust",
  "saffron",
  "glass spice jar",
  "red fabric",
  "orange fabric",
  "handicrafts",
  "small Persian rug",
  "used medium space suit",
  "heffalump shag rug",
  "woozle hide purse"
]

cart = []
wishlist = []

puts "Hello and welcome to the online Souq.  Whats your name?"
name = gets.chomp.capitalize
puts "We carry the following items."
items.each do |item|
  print " * "
  puts item
end
puts "What would you like to add to the shopping cart #{name}?"
request = gets.chomp.downcase

while request != "finished"
  if items.include?(request)
    cart << request
    puts "Add another item to continue shopping or type finished to checkout."
    request = gets.chomp.downcase
  else
    wishlist << request
    puts "Sorry we dont have that. Try something else or if ready to checkout type finished."
    request = gets.chomp.downcase
  end
end
puts ""
puts "#{name}, thanks for trying our online Souq platform. Here is a list of the items in your cart!:"
puts ""
cart.each do |ele|
  print " * "
  puts ele
end

puts ""
puts "#{name}, we also noticed you requested the following items, but we dont have them at this time.  We will notify you when we do!"
puts ""
wishlist.each do |ele|
  print " * "
  puts ele
end
