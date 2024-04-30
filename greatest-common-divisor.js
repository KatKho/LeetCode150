// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
  
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 === "") return str2;
    if (str2 === "") return str1;

    if (str1.startsWith(str2)) {
        return gcdOfStrings(str1.slice(str2.length), str2);
    }

    if (str2.startsWith(str1)) {
        return gcdOfStrings(str1, str2.slice(str1.length));
    }

    return "";
};

// Time Complexity: O(n)
// Space Complexity: O(1)
