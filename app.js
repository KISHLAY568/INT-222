const q = require('lodash');
const a = require('./add.js');
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [1, 2, 3, 4, 5];
console.log('original numbers:', numbers);
console.log('Doubled numbers:', doubledNumbers);
let p = a.add(2, 4);
console.log(p);