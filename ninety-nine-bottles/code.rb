# YOUR CODE HERE
num = 99

while num >= 0
  if num == 0
    puts "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    puts ""
  elsif num == 1
    puts "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n"
    puts ""
  elsif num == 2
    puts "2 bottle of beer on the wall, 2 bottle of beer.\nTake one down and pass it around, 1 more bottle of beer on the wall.\n"
    puts ""
  elsif num % 10 == 0
    puts "#{num} bottles of beer on the wall, #{num} bottles of beer!\nTake one down and pass it around, #{num - 1} bottles of beer on the wall.\n"
    puts ""
  else
    puts "#{num} bottles of beer on the wall, #{num} bottles of beer.\nTake one down and pass it around, #{num - 1} bottles of beer on the wall.\n"
    puts ""
  end
    num -= 1
end
