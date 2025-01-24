// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

const starLine = (n) => {
    let line = "";

    if(n < 3 || n > 100) return "invalid input";
    for(let i = 1; i <= n; i++) {
        line += "*";
    }

    return count;
}

// console.log(starLine(1));

// 5 => '*****'
// 12 => '************'
// 3 => "***"

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

const starSpace = (n) => {
    let line = "";

    if(n < 3 || n > 100) return "invalid input";

    for(let i = 1; i <= n; i++) {
        if(i == 0 || i == n) line += "*"
          else line += " ";

    }

    return line;
}

// console.log(starSpace(2));

// 5 => '*   *'
// 12 => '*          *'

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

const starBox = (n, m) => {
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            
        }
    }
}

console.log(starBox(5, 5));

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
