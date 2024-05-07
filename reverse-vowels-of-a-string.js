// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    let letters = s.split('');
    let i = 0;
    let j = letters.length - 1;

    while (i < j) {
        while (i < j && !vowels.includes(letters[i])) {
            i++;
        }
        while (i < j && !vowels.includes(letters[j])) {
            j--;
        }
        if (i < j) {
            let temp = letters[i];
            letters[i] = letters[j];
            letters[j] = temp;
            i++;
            j--;
        }
    }
    return letters.join('');
};

// Time Complexity: O(n)
// Space Complexity: O(n)
