# YOUR CODE GOES HERE
items_we_have = "chips popcorn skittles granola mentos gum cheetos m&ms"
inventory = items_we_have.split
puts "What item would you like?"
item = gets.chomp.downcase
  if inventory.include?(item)
    puts "Item Index:\n#{items_we_have.index(item)}"
  else
    puts "Sorry, we dont carry that item."
  end
