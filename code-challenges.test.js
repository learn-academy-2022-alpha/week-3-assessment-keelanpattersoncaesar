// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibSequence", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibSequence(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

// Good failure! Hooray

// b) Create the function that makes the test pass.

// PC:
// create fn called fibSequence
// takes in a number
// made a new array starting at [1, 1] because every number starts that way
// use iteration with (number - 2) because we start with [1, 1] already
// .push our array position to the next index
// rinse, repeat
// return the array

const fibSequence = (number) => {
  let myNewArr = [1, 1];
  // [1, 1, 2, 3, 5, 8 ]
  for (let i = 0; i < number - 2; i++) {
    myNewArr.push(myNewArr[i] + myNewArr[i + 1]);
  }
  return myNewArr;
};

console.log(fibSequence(6));
console.log(fibSequence(10));

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("oddOnly", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
    // Expected output: [-9, 7, 9, 199]

    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
    // Expected output: [-823, 7, 23]
    expect(oddOnly(fullArr1)).toEqual([-9, 7, 9, 199]);
    expect(oddOnly(fullArr2)).toEqual([-823, 7, 23]);
  });
});

// GOOD FAILURE!

// b) Create the function that makes the test pass.

// PS:
// create oddOnly function
// takes array as parameter
// .filter on any value that is NOT a number
// evaluate each by modulo 2 (!== %2 for odds)
// array.sort()
// call function
// big success

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];

const oddOnly = (array) => {
  let oddTime = array.filter(
    (value) => typeof value === "number" && value % 2 !== 0
  );
  oddTime.sort((a, b) => a - b);
  return oddTime;
  // I would like feedback on how the => works on line 90 please
};

console.log(oddOnly(fullArr1));
console.log(oddOnly(fullArr2));

// function oddOnly(array){
//   if (array % 2 !== 0) {
//     // array.filter
//     console.log(oddOnly);
//   }

// const filter = array.filter((number) => number % 2)

// function oddOnly(number) {
//   if (typeof number === "number") {
//     return (oddOnly);
//   }
// }

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

describe("arraySum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const numbersToAdd1 = [2, 4, 45, 9];
    // Expected output: [2, 6, 51, 60]

    const numbersToAdd2 = [0, 7, -8, 12];
    // Expected output: [0, 7, -1, 11]

    const numbersToAdd3 = [];
    // Expected output: []

    expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(arraySum(numbersToAdd2)).toEqual([0, 7, -1, 11]);
    expect(arraySum(numbersToAdd3)).toEqual([]);
  });
});

// // The best failing possible

// // b) Create the function that makes the test pass.

// // PS:
// // create arraySum function
// // takes in array
// // create empty array
// // add each index to the next (including previous values)
// // i[0] + i[1], i[0] + i[1] + i[2] etc
// // .reduce(previous value, current value, index) method
// // call function

const numbersToAdd1 = [2, 4, 45, 9];
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = [];
// Expected output: []

// My first attempt; close, but doesn't return all the values and doesn't put them in an array

// function arraySum(array) {
//   let array2 = [];
//   return array.reduce(
//     (previous, current, i) => (array2[i] = previous + current),
//     0
//   );
// }

const arraySum = (array) => {
  let emptyArray = [];
  let addingSum = 0;
  for (let i = 0; i < array.length; i++) {
    addingSum = addingSum + array[i];
    emptyArray.push(addingSum);
  }
  return emptyArray;
};
console.log(arraySum(numbersToAdd1))
console.log(arraySum(numbersToAdd2))
console.log(arraySum(numbersToAdd3))

// My second attempt (with some help). Having an empty array to work with really helped me to understand where I was going wrong