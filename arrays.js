
console.log("----------------------------")
console.log("3.2.1 exercises")
console.log("----------------------------")

// 3.2.1 Exercises
// 1. Write a for loop to print out the characters obtained from splitting “honey
// badger” on the empty string.
// 2. See if you can guess the of undefined in a boolean context. Use
// !! to confirm.

let arr = "honey badger".split("")

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

console.log("----------------------------")
console.log("3.2.1 exercises")
console.log("----------------------------")

// 3.3.1 Exercises
// 1. Define an array with the numbers 1 through 10. Use slicing and length
// to select the third element through the third-to-last. Accomplish the same
// task using a negative index.
// 2. Show that strings also support the slice method by selecting just bat
// from the string "ant bat cat". (You might have to experiment a little
// to get the indices just right.)

arr = [0,1,2,3,4,5,6,7,8,9]
console.log(arr.slice(3, -3))

let str = "ant bat cat"

console.log(str.split(" ")[1])