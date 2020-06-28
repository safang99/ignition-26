// YOUR CODE HERE


// let randomNum = Math.floor((Math.random() * 10) + 1)
//
// let name = prompt("Hi there, and whats your name?")
// let userGuess = parseInt(prompt("Please guess a number from 1 to 10"), 10)
//
// if (userGuess === randomNum) {
//   alert(`You've won! Great guess ${name}!`)
// } else {
//   alert(`Sorry ${name}. Thats night the right number.`)
// }

class Node
{
  constructor(content)
  {
    this.content = content;
    this.leftChild = null;
    this.rightChild = null;
  }
}

let a = new Node("A")
let b = new Node("B")
let c = new Node("C")
let d = new Node("D")
let e = new Node("E")
let f = new Node("F")

a.leftChild = b
a.rightChild = c
b.leftChild = d
c.leftChild = e
c.rightChild = f

// let leafs = []
//
// let treeRecursion = (node, arr) => {
//   if (node.leftChild === null && node.rightChild === null) {
//     arr.push(node)
//   }
//   if (node.leftChild !== null) {
//     treeRecursion(node.leftChild, arr)
//   }
//   if (node.rightChild !== null) {
//     treeRecursion(node.rightChild, arr)
//   }
//
//   return arr
// }

let treeRecursion = (node) => {
  let arr = []
  if (node.leftChild === null && node.rightChild === null) {
    arr.push(node)
  }
  if (node.leftChild !== null) {
    arr.push(treeRecursion(node.leftChild))
  }
  if (node.rightChild !== null) {
    arr.push(treeRecursion(node.rightChild))
  }

  return arr.flat()
}
