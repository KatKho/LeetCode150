// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letterCount = {};
    for (let letter of magazine) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
    for (letter of ransomNote) {
        if (!letterCount[letter] || letterCount[letter] <= 0) {
            return false;
        } 
        letterCount[letter]--;
    }
     return true;
};

// Time Complexity: O(n+m)
// Space Complexity: O(1)