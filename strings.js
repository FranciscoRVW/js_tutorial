let x = "foo"
let y = ""

if (x.length === 0 && y.length === 0) {
  console.log("Both strings are empty")
} else {
  console.log("At least one of the strings is non-empty")
}

if (x.length === 0 || y.length === 0) {
  console.log("At least one of the strings is empty")
} else {
  console.log("Neither of the strings is empty")
}

console.log("----------------------------")
console.log("2.5.1 exercises")
console.log("----------------------------")

var animal = "HoNeYBadGer"
var lowerAnimal = animal.toLowerCase()

console.log(lowerAnimal.includes("hon"))


console.log("----------------------------")
console.log("2.5.1 exercises")
console.log("----------------------------")

str = "To be, or not to be, that is the question"

for (var i = 0; i < str.length; i++) {
  console.log(str[i])
}