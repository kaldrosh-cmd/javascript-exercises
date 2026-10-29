 /* function reverseString(text) {
    return text.split("").reverse().join("");
} */

function reverseString(text) {
    let reversed = "";

    for (const char of text) {
        reversed = char + reversed;
    }

    return reversed
}

// Do not edit below this line
module.exports = reverseString;
