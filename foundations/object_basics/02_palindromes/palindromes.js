const palindromes = function (string) {
   const lowerCased = string.toLowerCase().replace(/[^a-z0-9ąęćłńóśźż]/gi, "");
   const reversed = lowerCased.split("").reverse().join("");
   return lowerCased === reversed;
};

// Do not edit below this line
module.exports = palindromes;
