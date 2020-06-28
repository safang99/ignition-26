 // YOUR CODE HERE
num = 99

while(num >= 0) {
  if (num === 0) {
    console.log("\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
  } else if (num === 1) {
      console.log("\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.")
  } else if (num === 2) {
      console.log("\n2 bottle of beer on the wall, 2 bottle of beer.\nTake one down and pass it around, 1 more bottle of beer on the wall.")
  } else if ((num % 10) === 0) {
      console.log(`\n${num} bottles of beer on the wall, ${num} bottles of beer!\nTake one down and pass it around, ${num - 1} bottles of beer on the wall.`)
  } else {
      console.log(`\n${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottles of beer on the wall.`)
  }
  num --
}
