# Part 1
time_capsule = []

puts "Hello user. What is your name?"
name = gets.chomp.capitalize

asking = true
while asking
  asking = false
  puts "What would you like to add to the capsule? If done please type FINISHED to exit."
  input = gets.chomp
    if input == "FINISHED"
      break
    elsif input != "FINISHED" && input.length > 0
      puts "How many of those would you like? Please choose a number greater then 0."
      quant = gets.chomp
      time_capsule << " * #{input} (#{quant})"
      asking = true
    end
end

puts "Here is your current time capsule #{name}."
time_capsule.each { |item| puts item }
