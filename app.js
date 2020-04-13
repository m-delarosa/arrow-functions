// Basic Structure for MULTIPLE PARAMS:
// (param1, param2, paramN) => expression

// ES5
multiplyES5 = function (x, y) {
  return x * y
}

// ES6
multiplyES6 = (x, y) => {
  return x * y
}

// ES6 if there is only one expression:
multiplyEs6OneExpression = (x, y) => x * y

// console.log(multiplyES5(3, 2))
// console.log(multiplyES6(3, 2))
// console.log(multiplyEs6OneExpression(3, 2))

// ONE PARAM
// Parenthesis is optional with only one param

// ES5
phraseSplitterEs5 = function phraseSplitter(phrase) {
  return phrase.split(" ")
}

// ES6
const phraseSplitterEs6 = (phrase) => phrase.split(" ")

// console.log(phraseSplitterEs6("ES6 Awesomeness"))

// NO PARAMS
// Paranthesis are require when no parameters are present.

//ES5

docLogEs5 = function docLog() {
  console.log(document)
}

//ES6
const sayHiEs6 = () => console.log("Hi")

// console.log(sayHiEs6)

//Object Literal Syntax
//Arrow functions, like function expressions, can be used
// to return an object literal expression. The only caveat is that the body
// needs to be wrapped in parentheses, in order to distinguish between a block
// and an object (both of which use curly brackets).

var setNameIdsEs6 = (id, name) => ({ id: id, name: name })

// console.log(setNameIdsEs6(1, "Mike"))

//USE CASES

//ARRAY MANIPULATION

const smartPhones = [
  { name: "iPhone", price: 649 },
  { name: "Galaxy S6", price: 576 },
  { name: "Galaxy Note 5", price: 489 },
]

// We can create an array out object values:

//ES5
pricesEs5 = smartPhones.map(function (phone) {
  return phone.price
})

//ES6
var prices = smartPhones.map((phone) => phone.price)

// console.log(prices)
// [649, 576, 489]

// Another example using array filter method.

const array = [...Array(16).keys()]

divisibleByThreeES5 = array.filter(function (number) {
  return number % 3 === 0
})

divisibleByThreeES6 = array.filter((number) => number % 3 === 0)

// console.log(divisibleByThreeES6)

//PROMISES AND CALLBACKS

//ES5

aAsync().then(function() {
    return bAsync ()
}).then(function() {
    return cAsync()
}).done(function() {
    finish()
})

//ES6

aAsync().then(() => bAsync()).then(() => cAsync()).done(() = finish)
