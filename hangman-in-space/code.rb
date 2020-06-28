def print_puzzle(word, guess_letters = [])
  str = ""
  word.each_char do |char|
    if guess_letters.include?(char)
      str += char + " "
    else
      str += "_ "
    end
  end
  str
end
