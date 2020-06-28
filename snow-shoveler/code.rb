# YOUR CODE GOES HERE
# Pricing chart
# 0 - 49 cubic ft:  $20
# 50 - 149 cubic ft: $50
# 150 - 299 cubic ft: $100
# 300+ cubic ft: $150

width = 8.0 #ft
length = 20.0 #ft
snow_height = 8.0 / 12.0 #ft
cubic_ft = width * length * snow_height
puts "Cubic Feet: #{cubic_ft}"

if cubic_ft < 50
  puts "Quote Price: $20"
elsif cubic_ft >= 50 && cubic_ft <150
  puts "Quote Price: $50"
elsif cubic_ft >= 150 && cubic_ft < 300
  puts "Quote Price: $100"
elsif cubic_ft >= 300
  puts "Quote Price: $150"
end
