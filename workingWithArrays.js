let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits[0]);
console.log(fruits[2]);
//Adding elements to the end
fruits.push("kiwi");
console.log(fruits);
//Adding elements to the front
fruits.unshift("mango");
console.log(fruits);
//Removing the last element
let removedLast = fruits.pop();
console.log(removedLast);
//Removing the first element
let removedFirst = fruits.shift();
console.log(removedFirst);
console.log(fruits);

//Finding Index of an element
let indexOfOrange = fruits.indexOf("orange");
console.log(indexOfOrange);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//slicing an array
let citrus = fruits.slice(1,3);
console.log(citrus);

//splicing an array
let removed =  fruits.splice(1,2,"pear","melon");

//Concatenating arrays
let moreFruits = ["grapefruit","pineapple"];
let allFruits = fruits.concat(moreFruits);

console.log(allFruits);


