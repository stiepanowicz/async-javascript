const tick = Date.now();
const consoleLogTimeElapsed = (v) => console.log(`elapsed: ${Date.now() - tick}ms`);
const log = (v) => { return (`elapsed: ${Date.now() - tick}ms`)};


const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  console.log(primes);
  consoleLogTimeElapsed(primes);
  const elapsed = log(primes);
  output.textContent = `Finished generating ${quota.value} primes. Time ${elapsed}.`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});


