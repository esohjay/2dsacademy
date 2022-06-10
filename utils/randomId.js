export class GenerateValues {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  generatePw() {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str = "";
    for (let i = 0; i < 8; i++) {
      const index = Math.floor(Math.random() * characters.length + 1);
      str += characters.charAt(index);
    }

    return str;
  }
  generateId() {
    const randomNo = Math.random().toString().slice(2, 8);
    const initName = this.lastName.slice(0, 1) + this.firstName.slice(0, 1);
    const userId = randomNo + initName;
    return userId;
  }
}
