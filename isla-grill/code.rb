# YOUR CODE GOES HERE
dinner_total = 178.0
tip_percent = 0.20
tip = dinner_total * tip_percent
total = tip + dinner_total

puts "The total bill is $#{format("%.2f", total)}"
puts "You should tip $#{format("%.2f", tip)}"
