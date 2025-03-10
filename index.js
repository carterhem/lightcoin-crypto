// let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    //have the account balance start at $0
    this.balance = 0;
  }


}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}




class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("bill");
console.log("Starting Balance", myAccount.balance);
const t1 = new Deposit(120.0, myAccount);
t1.commit();

const t2 = new Withdrawal(50.0, myAccount);
t2.commit();

console.log("Ending Balance:", myAccount.balance);
