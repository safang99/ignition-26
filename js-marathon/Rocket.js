let rocket = {
  fuel: 0,
  addFuel(amount) {
    rocket.fuel += amount
    console.log(`new fuel amount: ${this.fuel}`)
  },
  fire() {
    if (this.fuel > 0) {
      this.fuel -= 1
      console.log(`The engines have been fired.\nnew fuel amount: ${this.fuel}`)
      return true
    } else {
      console.log("The engines have failed to fire")
      return false
    }
  }
}

module.exports = rocket
