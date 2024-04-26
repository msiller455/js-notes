// The Primitive Data Types in JS
// Strings
let name = 'michael';
// Numbers
const age = 33;
const float = 33.44;
const bigNum = 82374932847293472n;
// Boolean - only 2 values
const isTight = true;
// Null - only 1 value
const characterFlaws = null;
// undefined - only 1 value
let someVal;
// Symbols
const sym1 = Symbol('yo');

// Object / Reference Data Types
const obj = {
  name2: 'michael',
};

// Example of how primitive values are treated in JS
let primNum = 100;
let copyNum = primNum;
primNum += 50;
// console.log('Notice that each primitive is treated independently: ')
// console.log('primNum: ', primNum)
// console.log('copyNum: ', copyNum)

// Example of how 'reference types' are treated in JS
let person = {
  name: 'Kevin',
};

let personCopy = person;
personCopy.name = 'Bob';

// console.log('Notice that both variables are changed: ')
// console.log('person: ', person)
// console.log('personCopy: ', personCopy)
// console.log('JS variables do not store the object itself, but a reference to the object in the heap')
