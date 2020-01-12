const mathOperations = require("./math-operations");
const colors = require("colors");

let primes = mathOperations.getPrimes(1, 100);
for (const item of primes) {
    console.log(item);
}

console.log("----------------");

primes = mathOperations.getPrimes(100, 200);
for (const item of primes) {
    console.log(colors.random(item.toString()));
}
