// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]


// Solution 1:

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[count] = nums[i];
            count++;
        }     
    }  
    for (let j = nums.length-1; j >= count; j-- ) {
        nums[j] = 0;
    }  
};


// Solution 2:

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;
       for (let i = 0; i < nums.length; i++) {
           if (nums[i] != 0) {
               let temp = nums[i];
               nums[i] = nums[lastNonZeroFoundAt];
               nums[lastNonZeroFoundAt] = temp;
               lastNonZeroFoundAt++;
           }
       }
   };

// Time Complexity: O(n)
// Space Complexity: O(1)