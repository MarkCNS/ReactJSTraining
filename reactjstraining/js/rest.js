function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(5, 10, 15, 20));
