// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship')
let CrewMember = require('./CrewMember')
let rocket = require('./Rocket')

let launchpad = (ship, crew) => {
  console.log(`Preflight procedures have begun!`);
  console.log(`Welcome abroad ${ship.name}`)
  ship.loadCrew(crew)
  ship.captain()
  ship.mountPropulsion(rocket)
  ship.propulsion.addFuel(50)
  countDown(5, ship)
  // countDown(5, ship, ship.takeoff)
  // ship.takeoff()
}
let ourShip = new Spaceship("Serenity")
let crewNames = ["Ian", "Emily", "Tony", "Richa"]

let trainCrew = (crew) => {
  let trained = crew.map((name) => {
    let currentMember = new CrewMember(name)
    currentMember.trained = true
    return currentMember
  })
  return trained
}

function countDown(num, ship) {
  if (num === 0) {
    console.log("Blasting Off!")
    ship.takeoff()
  } else {
    console.log(`${num}...`)
    setTimeout(() => {
      countDown(num - 1, ship);
    }, 1000)
  }
}

// let countDown = (num, fn) => {
//   if (num === 0) {
//     return console.log("Blasting Off!")
//     fn();
//   } else {
//     console.log(`${num}...`)
//     setTimeout(() => {
//       countDown(num - 1, fn);
//     }, 1000)
//   }
// }





launchpad(ourShip, trainCrew(crewNames))
