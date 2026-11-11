const fibonacci = function(n) {
    const num = Number(n);
    if (num <= 0 || Number.isNaN(num)) {
        return "OOPS";
    }
    const array = [0, 1];
    for (let i = 2; i <= num; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array[num];
};

// Do not edit below this line
module.exports = fibonacci;
