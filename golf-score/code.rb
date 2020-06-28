score_card = [
 {5 => 7},
 {4 => 5},
 {3 => 3},
 {4 => 4},
 {4 => 4},
 {3 => 2},
 {4 => 5},
 {5 => 5},
 {4 => 5},
 {5 => 7},
 {4 => 4},
 {4 => 4},
 {3 => 3},
 {4 => 5},
 {4 => 5},
 {4 => 4},
 {3 => 3},
 {5 => 6}
]

total_strokes = 0
score_card.each do |hole|
  hole.each_value { |stroke| total_strokes += stroke }
end

puts "Total Strokes: #{total_strokes}"

total_par = 0
score_card.each do |hole|
  hole.each_key { |par| total_par += par }
end

puts "Total Par: #{total_par}"

score = total_strokes - total_par
if score > 0
  puts "You were #{score} strokes over par."
elsif score < 0
  puts "You were #{-1 * score} under par!"
else
  puts "You went par for the course."
end
