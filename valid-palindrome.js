// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerS = s.toLowerCase();
    let newS = '';
    for (let i = 0; i < lowerS.length; i++) {
        let charCode = lowerS.charCodeAt(i);
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) { // Checking for alphabets and numbers
            newS += lowerS[i];
        }
    }

    for (let i = 0, j = newS.length - 1; i < j; i++, j--) {
        if (newS[i] !== newS[j]) {
            return false;
        }
    }
    return true;
};


// Time Complexity: O(n)
// Space Complexity: O(n)