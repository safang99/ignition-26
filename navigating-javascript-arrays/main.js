let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]


let supplyCheck = (arr) => {arr.forEach((item) =>
  console.log(`${item} is logged and accounted for.`))}

supplyCheck(supplies)

let stowSupplies = (suppliesArray) => {suppliesArray.forEach((item, idx) =>
console.log(`${item} is in locker ${idx + 1}`))}
stowSupplies(supplies)

let addAlphabetically = (arr, item) => {
  let newSupplies = arr.concat(item)
  return newSupplies.sort()
}

console.log(addAlphabetically(supplies, "laser pistol"))

let stockCheck = (checklist, inventory) => {
  let missingItems = []
  checklist.forEach((item) => {
    if(!inventory.includes(item)) {
      missingItems.push(item)
    }
    })
    return missingItems
  }


let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]

console.log(stockCheck(inventoryChecklist, supplies))

let addMissingSupplies = (supplyArray, missingSupplies) => {
  return supplyArray.concat(missingSupplies)
}


console.log(addMissingSupplies(supplies, stockCheck(inventoryChecklist, supplies)))
