function almostIncreasingSequence(sequence) {
    // create a for loop
    // inside the for loop create 2 conditional statements
    // return true if it is possible to remove one element from the array in order to get a
    // stricly increasing sequence
    // need to keep track of how many times the sequence is increasing or decreasing so
    // create a count variable.

    let count = 0;
    for (let i = 0; i < sequence.length; i++) {
        //if current <= previous
        if(sequence[i] <= sequence[i - 1]) {
            count++;
            //Not enough - if current <= two before AND next <= previous
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }
    return count <= 1;
}
