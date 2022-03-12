let a =  ["ant", "bat", "cat", 42]

a.forEach(function (element) {
  console.log(element)
})

let soliloquy = "To be, or not to be, that is the question"
Array.from(soliloquy).forEach(function (character) {
  console.log(character)
})

console.log("***Fat arrow versions***")

a.forEach((element) => {
  console.log(element)
})

Array.from(soliloquy).forEach((char) => {
  console.log(char)
})

console.log("***Number sort***")

let num_array = [ 8, 99, 17, 42, -50]

num_array.sort( (a, b) =>{ return a - b })

console.log(num_array)

num_array.forEach( (num) => { console.log(num) })
