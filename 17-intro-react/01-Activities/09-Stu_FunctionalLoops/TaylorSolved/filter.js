const originalArray = [1, 3, 2, 5, 10];

const evenNumbers = originalArray.filter(data => data % 2 === 0);

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

// Complete the following

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this
const primeArray = originalArray.filter(isPrime);
console.log(primeArray);
console.log(originalArray);


// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)

// Your code here

const largeNumbers = originalArray.filter(num => num > 5);
console.log(largeNumbers);
console.log(originalArray);

// Bonus: Use arrow functions as callbacks!
