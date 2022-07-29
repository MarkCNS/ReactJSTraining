const student = {
  firstName: "Commander",

  //accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  },
};

console.log(student.firstName); // Commander

// change(set) object property using a setter
student.changeName = "Kane";

console.log(student.firstName); // Kane
