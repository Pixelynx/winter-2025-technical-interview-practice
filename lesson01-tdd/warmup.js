// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

const starLine = (n) => {
    let line = "";

    if(n < 3 || n > 100) return "invalid input";
    for(let i = 1; i <= n; i++) {
        line += "*";
    }

    return line;

    /*
     TC - O(n):
     - Function uses single loop which iterate based off n
     - Operations inside of loop run on consant time
     - Total operations is proportional to n

     SP - O(n):
     - Function builds upon a single string variable
     - Size of the string grows proportionally based off n
     - Space grows linearly with n
    */
}

console.log(starLine(3));

// 5 => '*****'
// 12 => '************'
// 3 => "***"

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

const starSpace = (n) => {
    let line = "";

    if(n < 3 || n > 100) return "invalid input";

    for(let i = 1; i <= n; i++) {
        if(i == 1 || i == n) line += "*"
          else line += " ";

    }

    return line;

    /*
     TC - O(n):
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
    let shape = "";

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if((i == 1) || (i == n)) {
                shape += "*";
            } else {
                if(j == 1 || j == n) {
                    shape += "*";
                } else {
                    shape += " ";
                }
            }
        }

        if(i !== n) shape += "\n";
    }

    return shape;

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
