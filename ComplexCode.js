/* 
Filename: ComplexCode.js
Content: Complex code to generate a Fibonacci sequence and calculate the sum of the even numbers in the sequence.
*/

// Function to generate Fibonacci sequence
function generateFibonacciSequence(n) {
  // Initialize sequence array with first two terms
  let sequence = [0, 1];

  // Generate the Fibonacci sequence up to n terms
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

// Function to calculate the sum of even numbers in an array
function calculateSumOfEvenNumbers(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }

  return sum;
}

// Generate Fibonacci sequence and calculate sum of even numbers
const fibonacciSequence = generateFibonacciSequence(20);
const sumOfEvenNumbers = calculateSumOfEvenNumbers(fibonacciSequence);

// Print the Fibonacci sequence and sum of even numbers
console.log("Fibonacci Sequence:");
console.log(fibonacciSequence);

console.log("Sum of Even Numbers:");
console.log(sumOfEvenNumbers);

// Output:
// Fibonacci Sequence:
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
// Sum of Even Numbers:
// 3382