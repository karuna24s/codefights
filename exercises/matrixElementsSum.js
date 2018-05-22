function matrixElementsSum(matrix) {
    // the logic here is to create a total, create an array, stored the bannedIndex in it,       // iterate through the rows and columns. If the value is equal to zero we have to add,       // the value to the bannedIndex array. Using that array we check that the current value     // we are iterating on if it exists on the bannedIndez array. If it doesn't go ahead and
    // add that value to it.

    // need to create a variable of a priceTotal and initialize to zero
    let priceTotal = 0;
    // create an array of indexes which will be marked as unsuitable
    let bannedIndex = [];
    // create a for loop where we can iterate the length of the matrix being passed in (first for loop is for the row)
    for (let i = 0; i < matrix.length; i++) {
        // need a for loop for the column
        for (let j = 0; j < matrix[i].length; j++) {
            // add in an if statement to see if the value (current row and column) is zero.
            if (matrix[i][j] === 0) {
                // added this value to the banned index.
                bannedIndex.push(j);
            }
            // next we want to check if the current index we are on is part of the banned index array.
            else if(bannedIndex.indexOf(j) === -1){
                // if it doesn't exist in the array we can take our priceTotal and add to the current value which is in the current matrix (row column combination).
                // If it returns -1 it means the column has not been banned yet because it is not in the array we are using to keep track of it.
                priceTotal += matrix[i][j];
            }
        }
    }
    return priceTotal;
}
