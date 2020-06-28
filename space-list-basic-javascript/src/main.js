// Meets Expectations
let researcherSpaceItems = [ new SpaceItem("rock", .50, 5), new SpaceItem("insect", 2.00, 2), new SpaceItem("twig", 2.50, 4), new SpaceItem("plant", 2.00) ]

let summary = (array) => {
  let list = []
  let total = 0
  array.forEach((spaceitem) => {
    let cost = spaceitem.price * spaceitem.quantity
    total = total + cost
      if (spaceitem.quantity > 1) {
        plural = "s"
      } else {
        plural = ""
      }
    list.push(`${spaceitem.quantity} ${spaceitem.name}${plural} - $${cost.toFixed(2)}`)
  })
  return `Dear Researcher,\n\nI bought you:\n\n${list.join("\n")}\n\nYou owe me $${total.toFixed(2)}.`
}

console.log(summary(researcherSpaceItems))


// Optional
let inventoryLab1 = {
  fruit: 2,
  grain: 2,
  plant: 5,
  grassBlade: 5,
  rock: 10,
  mushroom: 11,
  twig: 3,
  insect: 1,
  soilSample: 5
};

let inventoryLab2 = {
  fruit: 2,
  grain: 2,
  plant: 5,
  grassBlade: 5,
  rock: 10,
  mushroom: 11,
  twig: 6,
  insect: 10,
  soilSample: 5
};

let researchersList = new SpaceList("Researcher", researcherSpaceItems)
researchersList.checkInventory(inventoryLab2)
researchersList.checkInventory(inventoryLab1)
