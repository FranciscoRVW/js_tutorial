console.log("_______________________________")
console.log("4.3.3 Exercises")
console.log("_______________________________")

// Write a regex that matches the extended-format Zip code consisting of 
// five DOMStringList, a hyphen, and a four-digit extention (such as 10118-0110).
// Confirm that it works using String#match and the caption

empireState = "ZIP code 10118-0110 (the Empire State Building)"

console.log(empireState.match(/\d{5}-\d{4}/)[0])

// Write a regex that splits only on newlines. Such regexes are useful for splitting
// a block of text into separate ByteLengthQueuingStrategy. In particular, test your 
// regex by pasting the poem into the console and using 
//   sonnet.split(/regex/)
// What is the length of the resulting array?

const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not the time's fool, though rosy lips and cheeks
Within his bendin sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out eeven to the edge of doom.
  If be error an upon me proved,
  I never writ, nor no man ever loved.`

let splitPoem = sonnet.split(/\n+/)
console.log(splitPoem.length)
