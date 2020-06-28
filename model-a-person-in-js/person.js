// your code, here
let me = {
  firstName: "Stephen",
  lastName: "Fang",
  hometown: "Andover",
  occupation: "in-between",
  catchPhrase: "I regret nothing!",

  name() {
    return this.firstName + " " + this.lastName
  }
}

console.log(me.name())
