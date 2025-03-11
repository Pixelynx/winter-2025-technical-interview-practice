// Please follow the prompts below to get practice using object methods such as Object.keys, Object.values, and Object.entries.

// 1. Create an object called `myObject` with the following key-value pairs:
//    - name: "JavaScript"
//    - est: 1995
//    - libraries: ["React", "Angular", "Vue"]

const myObject = {
    name: "JavaScript",
    est: 1995,
    libraries: ["React", "Angular", "Vue"]
  };

// 2. Log the `myObject` object to the console.
console.log("My Object:", myObject);

// 3. Store the keys of `myObject` in a variable called `myObjectKeys`.
const myObjectKeys = Object.keys(myObject);

// 4. Log the `myObjectKeys` variable to the console.
console.log("Keys of myObject:", myObjectKeys);

// 5. Store the values of `myObject` in a variable called `myObjectValues`.
const myObjectValues = Object.values(myObject);

// 6. Log the `myObjectValues` variable to the console.
console.log("Values of myObject:", myObjectValues);
