dramas = [
  "Stanger Llamas",
  "Game of Bones",
  "Llama Actually",
  "Grey's Catanomy",
  "Breaking Baaaaahhhd"
]

animations = [
  "Bojack Man",
  "Family Dog",
  "Futurellama",
  "Barkcher",
  "American Dog",
  "Pokemon",
  "Bob's Barkers"
]

comedies = [
  "Barks and Recreation",
  "30 Cats",
  "Bones",
  "Girl meets Cat",
  "Gilmore Cats",
  "New Dog",
  "Catlandia",
  "Full Mouse"
]

all_shows = [
  "Stanger Llamas",
  "Game of Bones",
  "Llama Actually",
  "Grey's Catanomy",
  "Breaking Baaaaahhhd",
  "Bojack Man",
  "Family Dog",
  "Futurellama",
  "Barkcher",
  "American Dog",
  "Pokemon",
  "Bob's Barkers",
  "Barks and Recreation",
  "30 Cats",
  "Bones",
  "Girl meets Cat",
  "Gilmore Cats",
  "New Dog",
  "Catlandia",
  "Full Mouse"
]

#YOUR CODE GOES HERE

llama_drama = dramas.select { |movie| movie.include?("Llama")}
puts llama_drama
puts

animate_dog = animations.select { |movie| movie.include?("Dog")}
puts animate_dog
puts

funny_not_cat = comedies.select { |movie| !movie.include?("Cat")}
puts funny_not_cat
puts

p all_shows.sort.map { |show| show[0].upcase }
