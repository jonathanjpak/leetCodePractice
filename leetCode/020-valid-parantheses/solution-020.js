
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Create an array to push characters of string onto
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    let stack = [];
    // Iterate through string
    for (const char of s) {
        // Push open-facing chars in stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // Else pop the stack and see if the closing char corresponds
            let popped = stack.pop();
            if (popped !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

export {isValid};