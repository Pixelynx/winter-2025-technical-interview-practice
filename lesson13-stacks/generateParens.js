function generateParenthesis(n) {
    if (n === 1) return ['()'];

    const result = new Set();
    const previousPair = generateParenthesis(n - 1);
    // Starting at 3
    // Does 3 = 1? No? Moving on
    // Create set to return pairs
    // Recursive call, pass in 2 to generateParen
    // For pair of prev loop; currently have an empty string in previousPair so the length is 1?
    // Second for loop to increment i based of length of pair; start at 0
    // adding to result
        // slicing pair [length of 0] at the [0,0]
        // adding a '()' to the previousPair string?
        // then slicing the empty string at 0
    // return ["()"] from recursive call
    // Still at 2, skip edge case, create set
    // 1 now gets passed into recursive call

    for (const pair of previousPair) {
        for (let i = 0; i <= pair.length; i++) {
            result.add(pair.slice(0, i) + '()' + pair.slice(i));
        }
    }

    return Array.from(result);
}

console.log('()'.slice(0))

