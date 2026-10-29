function removeFromArray(array, ...argumentsToRemove) {
    return array.filter(item => !argumentsToRemove.includes(item));
}


// Do not edit below this line
module.exports = removeFromArray;
