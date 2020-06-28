responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

# Confirm the correct number of responses have been stored by printing the number to the console (`20`)
puts "There are #{responses.length} possible outcomes."

# Ask the user what their question is, and store it as a variable called `question`
puts "Hello stranger, what is your question today?"
question = gets.chomp.downcase

# Output a random response to the user's question
puts "The magic 8 ball says: #{responses[rand(21)]}."


# Output the number of responses that include the word "yes"
count_yes = 0
responses.each { |phrase| count_yes += 1 if phrase.downcase.include?("yes") }
puts "#{count_yes} phrases contain the word yes"

# Output the number of responses that include the words "no" or "not"
count_no_not = 0
responses.each do |phrase|
  if phrase.include?("no")
    count_no_not += 1
  end
end
puts "#{count_no_not} phrases include the word no or not"


# Output the alphabetized list of responses
print responses.sort
puts



# Output the first and last responses from the alphabetized list
puts responses.sort[0]
puts responses.sort[-1]

# Add 1 response of your choosing to the current list
responses << "God NO!, Why would you even think of it?"

# Concat an array of 3 additional responses to the current list
responses.concat(["I dunno, what do you think?", "Maybe I guess", "You?, with that?, please..."] )

# Confirm the correct number of responses have been stored by printing the number to the console (`24`)
puts "#There are now {responses.length} possible outcomes."
