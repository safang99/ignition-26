# YOUR CODE GOES HERE
# Part 1
knife_juggling = (2.10 + 0.77 + 5.00 + 1.00 + 3.00)
torch_juggling = (6.00 + 3.50 + 7.00)
hand_balancing = (2.00 + 1.00)
human_blockhead = (0.75 + 0.43)
total = knife_juggling + torch_juggling + hand_balancing + human_blockhead
average = total / 12.0
puts "Knife Juggling:"
puts format("%.2f", knife_juggling)
puts "Torch Juggling:"
puts format("%.2f", torch_juggling)
puts "Hand Balancing:"
puts format("%.2f", hand_balancing)
puts "Human Blockhead:"
puts format("%.2f", human_blockhead)
puts "Total:"
puts format("%.2f", (knife_juggling + torch_juggling + hand_balancing + human_blockhead))
puts "Average Tip Value:"
puts format("%.4f", average)
puts

# Part 2
puts "For my next trick I will need a volunteer.  Yes you there and what is your name?"
volunteer_name = gets.chomp.capitalize
puts "Everyone please come together and give #{volunteer_name} a great big round of applause!"
puts "Now #{volunteer_name}, what is your favorite number?"
fav_num = gets.chomp
puts "#{fav_num} it is! Now #{volunteer_name} my associate and I will juggle these knives around you for #{fav_num} seconds."
puts "Lets see by a show of applause who is ready to get started!"
