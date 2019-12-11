const ATM = {
  isAuth: false,
  currentUser: {},
  // all cash available in ATM
  cash: 2000,
  // all available users
  users: [
    {id: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
    {id: "0025", pin: "123", debet: 675, type: "user"}
  ],
  // authorization
  auth(id, pin) {

    const user = this.users.find(empti => (empti.id === id) && (empti.pin === pin));

    if (user) {
      this.currentUser = user;
      this.isAuth = true;
      console.log(`Authorise ${user.id}, ${user.type}`);
    } else {
      console.log("Authorize filed.");
    }
  },
  // check current debet
  check() {

    if (this.isAuth) {
      console.log(`balance: ${this.currentUser.debet} `);
    } else {
      console.log("WARNING, ASSES DENIED");
    }
  },
  // get cash - available for user only
  getCash(amount) {
    if (this.currentUser.type === 'admin' && !this.isAuth) {
      console.log("This operation only authorized users");
      return;
    }
    if (this.currentUser.debet < amount) {
      console.log("You do not have enough funds");
      return;
    } else if (this.cash < amount){
      console.log("No mo cash in ATM");
      return;
    }

    this.currentUser.debet -= amount;
    this.cash -= amount;

    console.log(this.currentUser.debet);
  },
  // load cash - available for user only
  loadCash(amount) {

  },
  // load cash to ATM - available for admin only - EXTENDED
  loadAtmCash(amount) {

  },
  // get cash actions logs - available for admin only - EXTENDED
  getLogs() {

  },
  // log out
  logout() {

  }
};
