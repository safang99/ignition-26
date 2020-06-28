let responses = [
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
// your code, here
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
console.log(responses.length)

// Ask the user what their question is, and store it as a variable called `question`
let userQuestion = prompt("What is you question?")
// Output a random response to the user's question
let randomResp = responses[Math.floor((Math.random() * responses.length))]
console.log(randomResp)
// Output the number of responses that include the word "yes"
let yesCount = 0
responses.forEach((phrase) => {
  if (phrase.toLowerCase().includes("yes")) {
    yesCount ++
  }
})
console.log(yesCount)

// Output the number of responses that include the words "no" or "not"
let noCount = 0
responses.forEach((phrase) => {
  if (phrase.toLowerCase().includes("no")) {
    noCount ++
  }
})
console.log(noCount)
// Output the alphabetized list of responses
let alphabetized = responses.sort()
console.log(alphabetized)

// Output the first and last responses from the alphabetized list
console.log(alphabetized[0])
console.log(alphabetized[alphabetized.length - 1])
// Delete two of the negative responses
let idx1 = responses.indexOf("Don't count on it")
responses.splice(idx1, 1)

let idx2 = responses.indexOf("My reply is no")
responses.splice(idx2, 1)

// Reassign 'Ask again later' to the beginning of the array
let idxOld = responses.indexOf("Ask again later")
responses.splice(idxOld, 1)
responses.unshift("Ask again later")

// Add 1 response of your choosing to the current list
responses.push("Could go either way really")

// Concat an **array** of 3 additional responses to the current list
let additionalResponses = ["GOD NO!", "I think you know the answer...", "The day is yours!"]
responses = responses.concat(additionalResponses)

// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)
console.log(responses.length)
