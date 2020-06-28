let crewMembers = ["River", "Zoe", "Wash", "Mal", "Book", "Jayne"]

let quotes = [
  [
    "No power in the Verse can stop me.",
    "I can kill you with my brain.",
    "My food is problematic.",
    "This whole conclusion is fallacious.",
    "Now they see the sky and they remember what they are."
  ],
  [
    "Sorry, sir. Didn't mean to enjoy the moment.",
    "Is there any way I'm gonna get out of this with honor and dignity?",
    "If it moves, shoot it.",
    "I ain't so afraid of losing something that I ain't gonna try to have it.",
    "Big damn heroes.",
    "We crashing again?"
  ],
  [
    "I am a leaf on the wind. Watch how I soar.",
    "Oh God, oh God, we're all going to die?"
  ],
  [
    "Did something just fly off my gorram ship?",
    "We've done the impossible, and that makes us mighty.",
    "We are just too pretty for God to let us die.",
    "Morbid and creepifying, I got no problem with, long as she does it quiet-like.",
    "I swear, by my pretty floral bonnet, I will end you."
  ],
  [
    "I don't care what you believe in, just believe in it.",
    "A government is a body of people, usually, notably ungoverned.",
    "You don't fix faith, River. It fixes you.",
    "If you can't do something smart, do something right."
  ],
  [
    "We're gonna explode? I don't wanna explode!",
    "Let's be bad guys.",
    "You don't pay me to talk pretty.",
    "You guys had a riot? On account o' me? My very own riot?",
    "Aw, hell, if I had wanted schooling, I would have gone to school.",
    "Not as deceiving as a low down, dirty... deceiver."
  ]
]

let numberOfQuotes = (name) => {
  let idx = crewMembers.indexOf(name)
  return quotes[idx].length
}

let whoSaidThis = (quote) => {
  let i = 0
  quotes.forEach((phrases, idx) => {
    if (phrases.includes(quote)) {
      i = idx
    }
  })
  return crewMembers[i]
}

let longestQuote = (name) => {
  let idx = crewMembers.indexOf(name)
  let ordered = quotes[idx].sort((a, b) => b.length - a.length)
  return ordered[0]
}

let averageQuoteLength = (name) => {
  let idx = crewMembers.indexOf(name)
  let sayings = quotes[idx]
  let count = 0
  sayings.forEach((phrase) => {
    count = count + phrase.length
  })
  return Math.round((count / numberOfQuotes(name)))
}

console.log(`Mal has ${numberOfQuotes("Mal")} quotes.`)
console.log(`Zoe has ${numberOfQuotes("Zoe")} quotes.`)

let washQuote = "I am a leaf on the wind. Watch how I soar."
console.log(`${whoSaidThis(washQuote)} says: ${washQuote}`)
let jayneQuote = "Let's be bad guys."
console.log(`${whoSaidThis(jayneQuote)} says: ${jayneQuote}`)

console.log(`Rivers's longest quote is: ${longestQuote("River")}`)
console.log(`Book's longest quote is: ${longestQuote("Book")}`)

console.log(`The average length of Zoe's quotes is: ${averageQuoteLength("Zoe")}`)
