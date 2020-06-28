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

  // filterFunction(allRecyclables) {
  //     allRecyclables.filter((recyclable)=>{return !recyclable.includes("plastic","paper","glass", "metal can")}
  //   }),

  // filterOutRecyclables(trash) {
  //   this.recyclables = trash.filter(recycleThis)
  // },

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





let recyclablesPile = [ "space banana peel","paper", "plastic", "plastic", "glass", "styrofoam coffee mug", "old dilithium battery", "metal can", "paper"]


let filterOutRecyclables = (allRecyclables)=>{
let filterFunction = (allRecyclables)=>{
    allRecyclables.filter((recyclable)=>{return !recyclable.includes("plastic","paper","glass", "metal can")}
    )
}}


let goodRecyclables = recyclablesPile.filter(filterFunction)
cargoHold.recyclables = goodRecyclables
console.log(goodRecyclables)


 console.log(filterFunction(recyclablesPile))
