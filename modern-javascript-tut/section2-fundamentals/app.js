// Different variables in JS

// var, let, const

// var name = "John Doe";
// console.log(name);
// // the var and let can be reassigned
// name = "Steve Smith";
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = "hello";
// console.log(greeting);

// // letters, numbers, _, $ - only characters that can be inside var
// // cannot start with a number

// // Multi word variables
// var firstName = "John"; // Camel case
// var first_name = "Sara"; // Underscore convention
// var FirstName = "Tom"; // Pascal Case
// var firstname; // Would not Recommend

// LET
// let name;
// name = "John Doe";
// console.log(name);
// // the var and let can be reassigned
// name = "Steve Smith";
// console.log(name);

// CONST - can't be reassigned
const name = "John";
console.log(name);
// name = "sarah";
// Have to assign a value
const greeting = 5;
console.log(greeting);

const person = {
  name: "John",
  age: 30,
};

person.name = "Sarah";
person.age = 32;

// console.log(person);
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

// we can redfine arrays and objects with the const
// but we can't redefine these const objects

// Const will be used unles the value needs to be changed - unless in an iterator or loop
