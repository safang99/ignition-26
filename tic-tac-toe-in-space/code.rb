def print_grid(board)
  board.each.each_with_index do |row, i_row|
    row.each_with_index do |char, i|
      if char == nil
        char = " "
      end

      if i == 1
        print " | #{char} | "
      else
        print char
      end
    end

    if i_row != (board.length - 1)
    puts ""
    puts "----------"
  end
  end

end





board_a = [
  ['x', 'o', 'x'],
  ['x', nil, 'o'],
  ['x', 'o', nil]
]

board_b = [
  [nil, 'o', 'x'],
  ['x', 'o', nil],
  ['x', 'o', nil]
]

print_grid(board_a)
puts ""
print_grid(board_b)
