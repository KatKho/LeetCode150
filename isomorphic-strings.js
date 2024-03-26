// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = {};
    let mapT = {};
    if (s.length != t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (!mapS[charS] && !mapT[charT]) {
            mapS[charS] = charT;
            mapT[charT] = charS;
        } else if (mapS[charS] != charT || mapT[charT] != charS) {
            return false;
        }
    }
    return true;
};


// Time Complexity: O(n)
// Space Complexity: O(1)