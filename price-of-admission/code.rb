#Your code goes here!
adult_ticket_cost = 120.80
child_ticket_cost = 40.00

adults = adult_ticket_cost * 4.00
kids = child_ticket_cost * 2.00
total = adults + kids
cost_split = total / 4.00

puts "A family of 4 adults and 2 children will pay #{format("%.2f", total)}"
puts "Each adult will need to pay #{format("%.2f", cost_split)}"
