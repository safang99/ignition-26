# Your code, here.
# Part 1

sum = 0.0

puts "enter a donation amount please"
while sum < 100.0
   donation = gets.chomp.to_f
   sum += donation
   puts "The current donations total in at $#{format("%.2f", sum)}."
end

puts "Youve reached $100!"

if sum >= 125
  excess_donations = (sum - 100) / 25
  excess_donations.to_i.times do
    puts "You have earned another $25"
  end
end
