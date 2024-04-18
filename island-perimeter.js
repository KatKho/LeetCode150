You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example 1:
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.

Example 2:
Input: grid = [[1]]
Output: 4

Example 3:
Input: grid = [[1,0]]
Output: 4

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                // Check top
                if (i === 0 || grid[i-1][j] === 0) perimeter++;
                // Check bottom
                if (i === rows - 1 || grid[i+1][j] === 0) perimeter++;
                // Check left
                if (j === 0 || grid[i][j-1] === 0) perimeter++;
                // Check right
                if (j === cols - 1 || grid[i][j+1] === 0) perimeter++;
            }
        }
    }

    return perimeter;
};


// Time Complexity: O(n x m)
// Space Complexity: O(1)