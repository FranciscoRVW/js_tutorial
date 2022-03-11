// Reverse a string
function reverse(string) {
  return Array.from(string).reverse().join("")
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let lower_string = string.toLowerCase()
  return lower_string === reverse(lower_string)
}

function emailParts(email) {
  splitEmail = email.split('@')
  user = parts[0].toLowerCase()
  domain = parts[1].toLowerCase()
  console.log(`Email user: ${user}, email domain: ${domain}`)
}
