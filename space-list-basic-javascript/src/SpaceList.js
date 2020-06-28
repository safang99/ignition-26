// For Optional Only
class SpaceList {
  constructor(name, items) {
    this.name = name
    this.items = items
  }

  checkInventory(inventory) {
    let missing = []
    this.items.forEach((item) => {
      if (!Object.keys(inventory).includes(item.name) || inventory[item.name] < item.quantity) {
        missing.push(item.name)
      }
    })
    if (missing.length === 0) {
      console.log("The Lab has everything!")
    } else {
      console.log(`Sorry the lab doesnt have enough of the following:\n- ${missing.join("\n- ")}\nYou will have to go someplace else to get these.`)
    }
  }
}
