# YOUR ADVANCED CODE, HERE
puts "How many sides does your dice have?"
sides = gets.chomp.to_i
puts "How many times do you want to roll your dice?"
roll_amount = gets.chomp.to_i

input = "y"
while input != "n"
  if input == "y"
  roll_amount.times do
    roll_1 = rand(1..sides)
    roll_2 = rand(1..sides)
    puts "you rolled a #{roll_1} and a #{roll_2}. Total : #{roll_1 + roll_2}"
  end
  puts "Roll again? (y/n)"
  input = gets.chomp
  else
    puts "Please try again (y/n)"
    input = gets.chomp
  end
end
