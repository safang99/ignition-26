# YOUR CODE GOES HERE
puts "Hello, I'm the first and only Talking Vending Machine. What would you like today?"
item_choice = gets.chomp.capitalize
puts "How many would you like?"
num_items = gets.chomp.downcase

while num_items.to_i == 0 && num_items.index("tons").nil? == true
  puts "Please enter a valid number"
  num_items = gets.chomp.downcase
end

if num_items.index("tons").nil? == false
  rand(1...20).times do
    puts item_choice
  end
else num_items.to_i.times do
  puts item_choice
  end
end

puts "Have a great day. Thanks for coming!"
