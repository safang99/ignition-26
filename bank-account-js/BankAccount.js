class BankAccount {
  constructor(initialBalance) {
    this.initialBalance = initialBalance
    this.currentBalance = this.initialBalance
  }

  transaction(changes) {
    this.currentBalance = changes.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },this.initialBalance)
    console.log(`Your current balance: $${this.currentBalance}`)
  }
}


let initialBalance = 1000
let account = new BankAccount(initialBalance)
account.transaction([-45, -99.95, -34.43])
