// Please use array methods such as .map(), .filter(), .reduce(), .every(), .some(), and .find() to solve the following prompts.

// Prompt 1: Write a function that takes an array of numbers as input and returns a new array with only the even numbers.
const onlyEvens = (arr) => {
    return arr.filter(n => {
        if(n % 2 == 0) return n;
    });
};

// console.log(onlyEvens([1, 2, 4, 5, 7, 8]));

// Prompt 2: Write a function that takes an array of strings as input and returns a new array with the lengths of each string.
const stringLength = (arr) => {
    return arr.map(s => s.length);
};

// console.log(stringLength(['kitty', 'hunger', 'headache'])); // => [5, 6, 8]
// Prompt 3: Write a function that takes an array of objects representing students, where each object has a 
// "name" and "age" property. Return a new array with only the names of the students who are above 18 years old.
const ofAge = (arr) => {
    return arr.map(obj => {
        if(obj.age > 17) return obj.name;
    })
};

const objArr = [{
    name: "Nicki",
    age: 42
},
{
    name: "Ace",
    age: 9
},
{
    name: "Megan",
    age: 29
},
{
    name: "Zaaden",
    age: 4
}
];

console.log(ofAge(objArr));