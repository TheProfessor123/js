const name = "The Professor"
const repoCount = 4

console.log(name + repoCount + " Value");

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('chhagan-crc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 7)
console.log(newString);

const anotherString = gameName.slice(-3, 11)
console.log(anotherString);

const newStringOne = "       Chhagan.       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chhagan.com/chagan%20ram"
console.log(url.replace('%20', '-'));
console.log(url.includes('chagan'));

console.log(gameName.split('-'));