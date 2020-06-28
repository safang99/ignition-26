let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
}

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
}

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
}

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
}

let shoppingCart = [eggs, milk, bread, coffee]

// your code, here

console.log("One pound of coffe will be $" +shoppingCart[3].price + ".")
console.log("There are " + shoppingCart[1].quantity + " gallon(s) of milk.")

subTotal = 0
shoppingCart.forEach((item) => {
  subTotal += (item.quantity * item.price)
})

console.log("the subtotal is $" + subTotal)
let tax = subTotal * .0625
let total = subTotal + tax
console.log("The total is $" + total.toFixed(2))
