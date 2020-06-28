// your code, here
let item1 = {
  itemName: "Apples",
  quantity: 3
}

let item2 = {
  itemName: "Steak",
  quantity: 1
}

let item3 = {
  itemName: "Spinach",
  quantity: 2
}

let shoppingCart = [item1, item2, item3]

shoppingCart.forEach((item) => {
  console.log(item.itemName + `: ${item.quantity}`)
})
