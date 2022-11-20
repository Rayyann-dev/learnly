# learnly
Complete the function printCell(arr, coords) such that given a 2D array and a string representing the coordinates of a cell, return the value of the cell. The coordinates are represented by the variable coords which is in the form of "R1C3" where R1 is row 1 and "C3" represents column 3. The function signature:

parameters:
arr, a 2D array
coords, a string representing the location of a cell
return: the value represented in arr at coords
You should do this on your local computer first, right the Jest test cases to make sure it is working.

Example:

Let's say we have an array:

let arr = [
  [4,4,4,4],
  [1,2,3,6]
];

e.g calling printCell(arr, "R1C2") should return the number 3 as row 0 and column 2 is 3. Recall arrays start indexing from 0.

Please note that the 2D array size can be in double digits as well.
