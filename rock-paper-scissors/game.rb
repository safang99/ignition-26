# YOUR CODE GOES HERE
options = { "r" => "rock", "p" => "paper", "s" => "scissors" }
random_index = rand(0..2)
computer_choice = options.values[random_index]

puts "Care to play a game?  Please type r for rock, p for paper, or s for scissors."
input = gets.chomp.downcase
player_choice = options[input]
if input == "r" || input == "p" || input == "s"
  puts "You have picked #{player_choice}"
  puts "The computer has picked #{computer_choice}"
    if player_choice == computer_choice
      puts "Its a tie!"
    elsif ( player_choice == "rock" && computer_choice == "scissors" ) ||
          ( player_choice == "paper" && computer_choice == "rock" ) ||
          ( player_choice == "scissors" && computer_choice == "paper" )
          puts "#{player_choice} beats #{computer_choice}, you win!"
    else
      puts "#{computer_choice} beats #{player_choice}, you lost."
    end
else
  puts "Please try again and only enter r, p, or s."
end
