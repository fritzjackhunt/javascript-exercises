const reverseString = function(word) {
    //convert to string
    let str = word.toString();

    //Convert to Array
    const myArray = str.split("");

    //Reverse Array
    const rev = myArray.reverse();

    //Convert back to string
    const toStr = rev.toString()

    //Remove commas
    let re = /,/gi;
    let revStr = toStr.replace(re, "")

    //Return
    return revStr
};

// Do not edit below this line
module.exports = reverseString;
