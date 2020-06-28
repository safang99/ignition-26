let cargoHold = {
  cleaned: false,
  daysSinceLastIncident: 0,
  fuel: 0,
  hyperdrive: null,
  recyclables: [],
  toolBin: {
    label: "Primary Tool Bin",
    tools: []
  },
  robotsForSale: [],
  dilithiumOreWeight: 0,
  trash: [],

  toggleCleanedStatus() {
    this.cleaned = !this.cleaned
  },

  addDayForIncidentReport() {
    this.daysSinceLastIncident ++
  },

  consolidateFuel(array) {
    this.fuel += array.reduce((total, currentFuel) => total + currentFuel)
  },

  retrieveWorkingHyperdrive(parts) {
    this.hyperdrive = parts.find(itWorks)
  },

  filterOutRecyclables(trash) {
    this.recyclables = trash.filter(recycleThis)
  },

  consolidateTools(toolPile) {
    oldToolBinsPile.forEach((pile) => {
      this.toolBin.tools = this.toolBin.tools.concat(pile.items)
    })
  },

  filterRobots(robotsArray) {
    this.robotsForSale = robotsArray.filter(goodToSale)
  },

  consolidateOre(oreArray) {
    oreArray.forEach((oreObject) => {
      if (oreObject.status === "stable") {
        this.dilithiumOreWeight += oreObject.weight
      } else {
        this.trash = this.trash.concat(oreObject)
      }
    })
  },

  fuelUpRobots() {
    this.robotsForSale.forEach((robot) => {
      if (robot.fuel < 5) {
        let fuelNeeded = 5 - robot.fuel
        this.fuel -= fuelNeeded
        robot.fuel = 5
      }
    })
  }


};

let goodToSale = (robot) => {
  return robot.yearsOld <= 15
}

let recycleThis = (item) => {
  return (item.includes("paper") || item.includes("plastic") ||
   item.includes("glass") || item.includes("metal can"))
}

let itWorks = (element) => {
  if (!element.includes("rusty")) {
    return element
  }
}

let fuelCanisterPile = [2, 5, 9, 2, 3, 4, 6, 8, 8, 2, 1, 0]

let hyperDrivePile = ["rusty hyperdrive", "millennium hyperdrive", "hyperdrive XL", "rusty hyperdrive", "rusty hyperdrive XL"]

let recyclablesPile = ["paper", "space banana peel", "plastic", "plastic", "glass", "styrofoam coffee mug", "old dilithium battery", "metal can", "paper"]

let oldToolBinsPile = [
 {
   label: "Tool Bin 1",
   items: []
 },
 {
   label: "Tool Bin 2",
   items: ["flux capicitor wrench", "hydrospanner", "android eye scanner", "skeleton key-card"]
 },
 {
   label: "Tool Bin 3",
   items: []
 },
 {
   label: "Tool Bin 4",
   items: ["transponder", "body scanner"]
 },
 {
   label: "Tool Bin 5",
   items: ["multi-pass", "sonic screwdriver", "teleporter gun"]
 }
]

let robotsPile = [
  {
    robotType: "Protocol Droid",
    yearsOld: 41,
    fuel: 0
  },
  {
    robotType: "Astromech Droid",
    yearsOld: 3,
    fuel: 2
  },
  {
    robotType: "Maintenance Droid",
    yearsOld: 10,
    fuel: 1
  },
  {
    robotType: "Bending Robot",
    yearsOld: 19,
    fuel: 0
  }
]

let orePile = [
  {
    status: "glowing",
    weight: 20.5
  },
  {
    status: "stable",
    weight: 15.5
  },
  {
    status: "stable",
    weight: 4.5
  },
  {
    status: "glowing",
    weight: 0.5
  }
]

console.log(cargoHold.cleaned)
console.log(cargoHold.toggleCleanedStatus())
console.log(cargoHold.cleaned)

console.log(cargoHold.daysSinceLastIncident)
console.log(cargoHold.addDayForIncidentReport())
console.log(cargoHold.daysSinceLastIncident)

console.log(cargoHold.fuel)
console.log(cargoHold.consolidateFuel(fuelCanisterPile))
console.log(cargoHold.fuel)

console.log(cargoHold.hyperdrive)
console.log(cargoHold.retrieveWorkingHyperdrive(hyperDrivePile))
console.log(cargoHold.hyperdrive)

console.log(cargoHold.recyclables)
console.log(cargoHold.filterOutRecyclables(recyclablesPile))
console.log(cargoHold.recyclables)

console.log(cargoHold.toolBin)
console.log(cargoHold.consolidateTools(oldToolBinsPile))
console.log(cargoHold.toolBin)

console.log(cargoHold.robotsForSale)
console.log(cargoHold.filterRobots(robotsPile))
console.log(cargoHold.robotsForSale)

cargoHold.consolidateOre(orePile)
console.log(cargoHold.dilithiumOreWeight)
console.log(cargoHold.fuel)
cargoHold.fuelUpRobots()
console.log(cargoHold)
