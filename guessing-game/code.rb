# Your code goes here
puts "Lets play the guessing game"
puts "What difficulty would you like to play? easy or hard?"
difficulty = gets.chomp.downcase

if difficulty == "easy"
  rand_num = rand(1..10)
  puts "I've picked a number between 1 and 10. Now guess it!"
else difficulty == "hard"
  rand_num = rand(1..20)
  puts "I've picked a number between 1 and 20. Now guess it!"
end

guess = gets.chomp.to_i
count = 1
while guess != rand_num
  puts "Nope, try again"
  guess = gets.chomp.to_i
  count += 1
end

puts "Great job, you got it!"
puts "You took #{count} total guesses."
