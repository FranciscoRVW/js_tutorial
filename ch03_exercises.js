console.log("____________________________")
console.log("3.2.1 exercises")
console.log("____________________________")

// Write a for loop to print out the characters obtained from splitting 
// "honey badger" on the empty string

for (let i = 0; i < "honey badger".split("").length; i++) {
  console.log("honey badger".split("")[i])  
}


console.log("____________________________")
console.log("3.5 exercises")
console.log("____________________________")
let total = ""
a = ['foo', 'bar', 'baz']

for (let i = 0; i < a.length; i++) {
  total += a[i]
}

console.log(total)
