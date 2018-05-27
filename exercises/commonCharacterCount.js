function commonCharacterCount(s1, s2) {
    // Split each of the parameters into an array
    s1 = s1.split("");
    s2 = s2.split("");
    // Create two objects
    let s1Object = {};
    let s2Object = {};
    // Create a for loop which iterates through the first s1 array and it will check if the
    // s1 object has a property which will equal to the character that we are checking and if
    // it is false we are going to add that property and add one as its value at that key.
    // If it is true meaning that it exists we are going ahead and and one to its value
    for (let i = 0; i < s1.length; i++) {
        // if statement that checks if the object has own property ... does the current item we
        // are checking does it not exist. if it is false
        if(s1Object.hasOwnProperty(s1[i]) === false) {
            // add that value to the object and set it equal to 1.
            s1Object[s1[i]] = 1;
        }
        else {
            // add one to the object.
            s1Object[s1[i]]++
        }
    }
    // add another loop for s2
    for (let i = 0; i < s2.length; i++) {
        // if statement that checks if the object has own property ... does the current item we
        // are checking does it not exist. if it is false
        if(s2Object.hasOwnProperty(s2[i]) === false) {
            // add that value to the object and set it equal to 1.
            s2Object[s2[i]] = 1;
        }
        else {
            // add one to the object.
            s2Object[s2[i]]++
        }
    }
    // iterate through the objects to see if there are any characers in common
    // create a total variable and initialize to 0
    let total = 0;
    // create a for loop to iterate through object
    for (let prop in s1Object) {
        // add a conditional statement stating if the opposite object we are iterating
        // through contain the property (does it equal to true)
        if(s2Object.hasOwnProperty(prop) === true) {
            // if it is add another conditional statement stating if the prop in
            // s2Object less than the prop in s1Object, add the prop in the s2object
            //  to the total variable
            if(s2Object[prop] < s1Object[prop]) {
                total += s2Object[prop];
            }
            else {
                // otherwise add the prop in the s1Object
                total += s1Object[prop];
            }
        }
    }
    return total;
}
