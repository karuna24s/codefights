function allLongestStrings(inputArray) {
    // initialize a variable which called largestLength which is equailvalent to the starting point
    let largestLength = inputArray[0].length;
    // can create a for loop which will iterate throught the inputArray and checks each
    // length of the word and if that value is larger than our longest word we go ahead and replace that for the entire array.
    // Since we initialized it to the first value, you can start with setting it to index 1 (the second spot) instead of zero.
    for(let i = 1; i < inputArray.length; i++) {
        // if the largestLength is less than the current word we are iterating on, then see that value. set the largestLength equal to that new largestLength;
        if(largestLength < inputArray[i].length) {
            largestLength = inputArray[i].length;
        }
    }
    // set the inputArray equal to itself after it has been filtered. Filter is an array method which lets us pass in an element and runs through the array and checks out a statement to filter out values where this statement is false.
    inputArray = inputArray.filter((element) => {
        // filter out all values where the length of the word less than the largestLength.
        // only return elements that are equial to the largestLength.
        return element.length === largestLength;
    });
    return inputArray;

}
