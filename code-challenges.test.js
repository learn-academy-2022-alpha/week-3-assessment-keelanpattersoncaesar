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

describe("fibSequence", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(fibSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
    })
  })

//   // Good failure! Hooray

// // Example input: 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// // Example input: 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// // b) Create the function that makes the test pass.

// // PC:
// // 

// const fibSequence = (number) => {
//     return number 
// }


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("oddOnly", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(oddOnly(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddOnly(fullArr2)).toEqual([-823, 7, 23])
  })
})

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

// function oddOnly(array){
//   if (array % 2 !== 0) {
//     // array.filter
//     console.log(oddOnly);
//   }

// const filter = array.filter((number) => number % 2)

// function oddOnly(number){
//   if (typeof(number) === 'number'){
//     console.log(oddOnly) 
//   }
// }

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("arraySum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(arraySum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(arraySum(numbersToAdd3)).toEqual([])
  })
})

// The best failing possible

// b) Create the function that makes the test pass.

// PS: 
// create arraySum function
// takes in array
// create empty array
// add each index to the next (including previous values)
  // i[0] + i[1], i[0] + i[1] + i[2] etc
    // .reduce(previous value, current value, index) method
// call function

function arraySum(array){
  let array2 = [];
  return array.reduce((previous, current, i) => array2[i] = previous+current, 0)
}

arraySum(numbersToAdd1)
arraySum(numbersToAdd2)
arraySum(numbersToAdd3)