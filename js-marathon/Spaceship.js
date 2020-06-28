class Spaceship {
  constructor(name) {
    this.name = name
    this.crew = []
    this.propulsion = null
  }

  loadCrew(crewArray) {
    crewArray.forEach((member) => {
      this.crew.push(member.name)
      console.log(`${member.name} has boarded the ship.`)
    })
  }

  captain() {
    let num = this.crew.length
    let randomNum = Math.floor(Math.random() * num )
    this.captain = this.crew[randomNum]
    console.log(`${this.captain} will be the captain of ${this.name}`)
  }

  mountPropulsion(obj) {
    this.propulsion = obj
    console.log("Propulsion has been mounted!")
  }

  takeoff() {
    if (this.propulsion.fire() === true) {
      console.log("Vroom Vroom Vroom")
    } else {
      console.log("Takeoff has failed")
    }
  }

  // countDown(num, fn) {
  //   console.log(typeof fn)
  //   if (num === 0) {
  //     console.log("Blasting Off!")
  //   } else {
  //     console.log(`${num}...`)
  //     setTimeout(() => {
  //       this.countDown(num - 1, fn);
  //       fn();
  //     }, 1000);
  //   }
  // }
}

module.exports = Spaceship
