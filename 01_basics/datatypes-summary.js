// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 261294878471998744n

// Reference(Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Chhagan",
    age: "21"
}

const myFunction = function(){
    console.log("Hello world");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "The professor"
let anotherName = myYoutubename
anotherName = "the_professor.cpp"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "chaganram@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "chaganramchoudhary@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);