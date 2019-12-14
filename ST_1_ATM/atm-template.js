const ATM = {
  isAuth: false,
  currentUser: {},
  // logging
  logATM: [],
  // all cash available in ATM
  cash: 2000,
  // all available users
  users: [
    {id: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
    {id: "0025", pin: "123", debet: 675, type: "user"}
  ],
  // authorization
  auth(id, pin) {

    if (this.isAuth) {
      console.log(`${this.currentUser.id}, ${this.currentUser.type} is already logged.`);
      return;
    }

    const user = this.users.find(entry => (entry.id === id) && (entry.pin === pin));

    if (user) {
      this.currentUser = user;
      this.isAuth = true;
      console.log(`Authorise ${user.id}, ${user.type}`);
      this.logATM.push(`Authorise ${user.id}, ${user.type}`);
    } else {
      console.log("Authorize filed.");
    }
  },
  // check current debet
  check() {


    if (this.isAuth && !(this.currentUser.type ==='admin')) {
      console.log(`balance: ${this.currentUser.debet} `);
      this.logATM.push(`id: ${this.currentUser.id}, type: ${this.currentUser.type}, current balance ${this.currentUser.debet}`);
    } else {
      console.log("Ned authorized user");
    }
  },
  // get cash - available for user only
  getCash(amount) {
    if ((this.currentUser.type === 'admin') || !this.isAuth) {
      console.log("This operation only authorized users");
      return;
    }
    if (this.currentUser.debet < amount) {
      console.log("You do not have enough funds");
      return;
    } else if (this.cash < amount) {
      console.log("No mo cash in ATM");
      return;
    }
    this.currentUser.debet -= amount;
    this.cash -= amount;
    console.log(this.currentUser.debet);
    this.logATM.push(`id: ${this.currentUser.id}, type: ${this.currentUser.type}, get cash ${amount}, current balance ${this.currentUser.debet}`);
  },
  // load cash - available for user only
  loadCash(amount) {
    if ((this.currentUser.type === 'admin') || !this.isAuth) {
      console.log("This operation only authorized users");
      return;
    }
    this.currentUser.debet += amount;
    this.cash += amount;
    console.log(`id: ${this.currentUser.id}, type: ${this.currentUser.type}, get cash ${amount}, current balance ${this.currentUser.debet}`);
    this.logATM.push(`id: ${this.currentUser.id}, type: ${this.currentUser.type}, load cash ${amount}, current balance ${this.currentUser.debet}`);
  },
  // load cash to ATM - available for admin only - EXTENDED
  loadAtmCash(amount) {
    if (!(this.currentUser.type === 'admin')) {
      console.log("This operation only authorized Admin");
      return;
    }
    this.cash += amount;
    console.log(`ATM load cash: ${amount}, thea cash is ${this.cash}.`);
  },
  // get cash actions logs - available for admin only - EXTENDED
  getLogs() {
    if (this.currentUser.type === 'admin') {
      this.logATM.forEach(function (entry) {
        console.log(entry.toString());
      })
    } else console.log("Asses denied");
  },
  // log out
  logout() {
    if (!this.isAuth) {
      console.log("no one to log out");
      return;
    }
    console.log(`Type: ${this.currentUser.type} id: ${this.currentUser.id} is logout.`);
    this.logATM.push(`Type: ${this.currentUser.type} id: ${this.currentUser.id} is logout.`);
    this.isAuth = false;
    this.currentUser = {};
  }
};
