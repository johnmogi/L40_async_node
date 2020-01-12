function isPrime(n) {

    if (n <= 1) {
        return false;
    }

    const limit = Math.sqrt(n);

    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function getPrimes(a, b) {
    const primes = [];

    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
    }

    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

module.exports = {
    isPrime,
    getPrimes
};

