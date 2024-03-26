// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true 

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let wordsArray = s.split(' ');
    let mapS = {};
    let mapP = {};
    if (pattern.length != wordsArray.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        let charS = wordsArray[i];
        let charP = pattern[i];

        if ((mapS[charS] && mapS[charS] !== charP) || (mapP[charP] && mapP[charP] !== charS)) {
            return false;
        }

        mapS[charS] = charP;
        mapP[charP] = charS;
    }
    return true;
};

// Time Complexity: O(n+m)
// Space Complexity: O(w), where w is the number of words in s 