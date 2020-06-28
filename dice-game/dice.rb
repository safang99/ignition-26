# YOUR CODE, HERE



#
# input = "Enter"
# while input != "S"
#   if input = "Enter"
#     dice_1 = rand(1..6)
#     dice_2 = rand(1..6)
#     puts "You rolled a #{dice_1} and a #{dice_2}"
#     puts "Total : #{dice_1 + dice_2}"
#     puts "Press 'Enter' to roll again, 'S' to stop"
#
#   else
#     puts "Please enter a valid choice."
#   end
# end

input = ""

while input != "S"

  while input.length == 0 do
    dice_1 = rand(1..6)
    dice_2 = rand(1..6)
    puts "You rolled a #{dice_1} and a #{dice_2}."
    puts "Total: #{dice_1 + dice_2}"
    puts "Press 'Enter' to roll again, 'S' to stop"
    input = gets.chomp
  end

  if input != "S" && input.length!= 0
    puts "Please enter a valid choice."
    puts "Press 'Enter' to roll again, 'S' to stop"
    input = gets.chomp
  end

end
