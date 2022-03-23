// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content
  this.translation = translation

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation)
  }
}

TranslatedPhrase.prototype = new Phrase()


// Returns true for a palindrome, false otherwise.

function emailParts(email) {
  splitEmail = email.split('@')
  user = parts[0].toLowerCase()
  domain = parts[1].toLowerCase()
  console.log(`Email user: ${user}, email domain: ${domain}`)
}

// Reverse a string
function reverse(string) {
  return Array.from(string).reverse().join("")
}

//  Adds 'reverse' to all strings
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("")
}

String.prototype.blank = function () {
  return (/^\s+$\s*/) ? true : false
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content

  this.processor = function (string) {
    return string.toLowerCase()
  }

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content)
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse()
  }

}

