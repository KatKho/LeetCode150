// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    
    const isMirror = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right || left.val !== right.val) return false;
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    };
    
    return isMirror(root.left, root.right);
};

// Time Complexity: O(n)
// Space Complexity: O(n)

 
