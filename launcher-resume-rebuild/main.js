// Your code here!


let randomQuote = () => {
  let quotes = [
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. Og Mandino',
    "Whether You Think You Can Or Think You Can\'t, You\'re Right. Quote By Henry Ford",
    'You Are Never Too Old To Set Another Goal Or To Dream A New Dream. C.S. Lewis'
  ]
  let index = Math.floor(Math.random() * quotes.length)
  let quote = quotes[index]
  document.getElementById('putQuoteHere').innerHTML = quote
}

// let quoteButton = document.getElementById('quote-button')
//
//
// quoteButton.addEventListener('click', (event) => {
//
// })
