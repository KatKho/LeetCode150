
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

 var isValid = function(s) {
    let stack = new Stack();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.isEmpty()) {
                return false;
            }

            let top = stack.pop();
            if ((char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')) {
                return false;
            }
        }
    }

    return stack.isEmpty();
};

// Time Complexity: O(n)
// Space Complexity: O(n)