function adjacentElementsProduct(inputArray) {
    // create the first product. start with initializing the product to the first
    // value in the array.
    var product = inputArray[0] * inputArray[1];
    // create a for loop since we want to check every value
    for (var i = 0; i < inputArray.length; i++) {
        product = inputArray[i] * inputArray[i+1] >= product ? inputArray[i] * inputArray[i+1] : product;
    }
    return product;
}
