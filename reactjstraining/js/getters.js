const student = {
  firstName: "Commander",
  get getName() {
    return this.firstName;
  },
};

console.log(student.firstName); //Accessing data property
console.log(student.getName); //Accessing getter methods
