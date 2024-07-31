// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Chhagan",
    "full name": "Chhagan Ram Choudhary",
    [mySym]: "mykey1",
    age: 21,
    location: "Bhubaneswar",
    email: "chhaganram@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Thursday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Chhagan@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Chhagancrc@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello World!");
}
JsUser.greetingTwo = function(){
    console.log(`Hello World!, my name is ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());