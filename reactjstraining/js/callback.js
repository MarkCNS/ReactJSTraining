// setTimeout callback function
function intro() {
  console.log("I");
  console.log("am");
  setTimeout(function () {
    console.log("Salam");
  }, 600);
  console.log("Commander");
}

intro();
