// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

const starLine = (n) => {
    // [SOLUTION 2]
    if(n < 3 || n > 100) return "invalid input";
    return '*'.repeat(n);

    /*
     TC - O(n):
     - If constraints are not met, exits operation with invalid message
     - Creates string using a single operation
     - Function is using built in "repeat" method
     - Total operations are proportional to the input n
     - Could be a little faster as it is using a built-in method and avoids explicitly iterating,
     however it would mostly benefit a larger input constraint
     SC - O(n):
     - Size of the string grows proportionally based off n
     - Space needed grows linearly with n
    */

    // // [SOLUTION 1] 
    // let line = "";

    // if(n < 3 || n > 100) return "invalid input";
    // for(let i = 1; i <= n; i++) {
    //     line += "*";
    // }

    // return line;

    /*
     TC - O(n):
     - If constraints are not met, exits operation with invalid message
     - Function uses single loop which iterate based off n
     - Operations inside of loop run on consant time
     - Total operations is proportional to n

     SC - O(n):
     - Function builds upon a single string variable
     - Size of the string grows proportionally based off n
     - Space needed grows linearly with n
    */
}

console.log(starLine(3));

// 5 => '*****'
// 12 => '************'
// 3 => "***"

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

const starSpace = (n) => {
    // [SOLUTION 3]
    if(n < 3 || n > 100) return "invalid input";
    return '*' + ' '.repeat(n - 2) + '*';

    /*
     TC - O(n):
     - If constraints are not met, exits operation with invalid message
     - Creates string using a single operation
     - Function is using built in "repeat" method repeating (n - 2) times
     - Total operations are proportional to the input n
     - Could be a little faster as it is using a built-in method and avoids explicitly iterating,
     however it would mostly benefit a larger input constraint
     SC - O(n):
     - Leading and ending '*' are conatenated to repeat method
     - Size of the string grows proportionally based off n
     - Space needed grows linearly with n
    */

    // // [SOLUTION 2]
    // let line = "*";

    // if(n < 3 || n > 100) return "invalid input";
    // for(let i = 0; i < n - 2; i++) {
    //     line += ' ';
    // }

    // return line += '*';

    /*
     TC - O(n):
     - If constraints are not met, exits operation with invalid message
     - Result variable is set with initial '*'
     - Function uses a single loop interating n - 2 times
     - Operations inside loop are constant time
     - Final '*' is concatenated in the return
     - Total number of operations is proportional to n
     SC - O(n):
     - Constructs string that represents the line
     - Size of string is directly proportional to n
     - Space needed grows linearly to the input n
    */

    // // [SOLUTION 1] 
    // let line = "";

    // if(n < 3 || n > 100) return "invalid input";

    // for(let i = 1; i <= n; i++) {
    //     if(i == 1 || i == n) line += "*"
    //       else line += " ";

    // }

    // return line;

    /*
     TC - O(n):
     - If constraints are not met, exits operation with invalid message
     - Function uses a single loop which iterates based off n
     - Operations inside loop run on constant time
     - Total number of operations is proportional to n

     SC - O(n):
     - Function builds upon single string variable
     - Length of string is proportional to n
     - Space grows linearly with n
    */
}

console.log(starSpace(5));

// 5 => '*   *'
// 12 => '*          *'

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

const starredShape = (n, m) => {
    // [SOLUTION 2]

    /*
     TC - O(n):
     -
     SC - O(n):
     -
    */
    // // [SOLUTION 1]    
    // let shape = "";

    // for(let i = 1; i <= n; i++) {
    //     for(let j = 1; j <= m; j++) {
    //         if((i == 1) || (i == n)) shape += "*"
    //           else 
    //             if(j == 1 || j == n) shape += "*"
    //               else shape += " ";
    //         }
    //     if(i !== n) shape += "\n";
    // }

    // return shape;

    /*
        TC - O(n * m):
        - Function utilizes a nested for loop, with the outer loop iterating n times and the
        inner loop iterating m times for each outer iteration
        - Operations inside of loop are constant time
        - Total operations is proportional to n * m

        SC - O(n * m):
        - Function builds upon a string representing the shape
        - Size of the string is proportional to the input dimensions of n and m
        - Final string result will have n * m chars
        - The space that is needed grows linearly with the product of n and m
    */
}

console.log(starredShape(5, 5));

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
