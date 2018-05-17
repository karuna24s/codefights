function checkPalindrome(inputString) {
//     let characters = inputString.split(''),
//         firstLetter = characters.shift(),
//         lastLetter = characters.pop();

//     if (firstLetter !== lastLetter) {
//         return false;
//     }

//     if (characters.length < 2) {
//         return true;
//     }
//     return checkPalindrome(characters.join(''));

    return inputString === inputString.split("").reverse().join("");

}
