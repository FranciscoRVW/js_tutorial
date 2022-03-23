let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// urls: imperative version
function imperativeUrls(elements) {
  let urls = []
  elements.forEach(element => {
    urls.push(urlify(element))
  });
  return urls
}

console.log(imperativeUrls(states))

// urls: functional version

// Returns a URL-friendly version of a string
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-')
}

function functionalUrls(elements) {
  return elements.map( element => urlify(element))
}

function elementUrl(elements) {
  return elements.map( element => `https://www.example.com/${element}`)
}

console.log(functionalUrls(states))
console.log(elementUrl(functionalUrls(states)))


// singles: imperative version
console.log('\n *** singles: imperative version *** \n')
function imperativeSingles(elements) {
  let singles = []
  elements.forEach(function (element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element)
    }
  })
  return singles
}

console.log(imperativeSingles(states))

// singles: Functional version
console.log('\n *** singles: Functional version *** \n ')
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1)
}
console.log(functionalSingles(states))

// Functional exercises:
// Write two filter functions that return the Dakotas: one using
// String#includes to test for the presence of the string
// "Dakota" and one using a regex that tests for the length of the split Array
// being 2
console.log("\n*** Functional filter exercises *** \n")
console.log("\n*** Filter by testing the presence of the string 'dakota' *** \n")

function dakotasTest01(elements) {
  return elements.filter( element => element.toLowerCase().includes('dakota'))
}

console.log(dakotasTest01(states))

console.log("\n*** Filter by testing element lentgth *** \n")

function dakotasTest02(elements) {
  return elements.filter( element => element.split(/\s+/).length === 2)
}

console.log(dakotasTest02(states))

console.log("\n*** Functional reduce exercises *** \n")
console.log("\n*** Imperative num exercise *** \n")

let numbers = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10]

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0
  elements.forEach(function (element) {
    total += element
  })
  return total
}

console.log(imperativeSum(numbers))

console.log("\n*** Functional num exercise *** \n")
// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n})
}
console.log(functionalSum(numbers))

// lengths: Imperative solution
console.log("\n*** Imperative length exercise *** \n")
function imperativeLengths(elements) {
  let lengths = {}
  elements.forEach(function (element) {
    lengths[element] = element.length
  })
  return lengths
}
console.log(imperativeLengths(states))

// lengths: functional solution
console.log("\n*** Functional length exercise *** \n")

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length
                          return lengths
  }, {})
}

console.log(functionalLengths(states))

console.log('*** Functional excercises')

// 1. Using reduce, write a function that returns the product of all the ele
// ments in an array. Hint: Where += adds, *= multiplies.

function multiplier(elements) {
  return elements.reduce((total, element) => {
    return total *= element
  }, 1)
}

console.log(multiplier(numbers))

function functionalLengths_01(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths}, {})
}

console.log(functionalLengths_01(states))
