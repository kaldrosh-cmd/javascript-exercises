const add = function(x, y) {
  let total = x + y;
  return total
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  return array.reduce((total, current) => {
    return total + current;
  }, 0);
}

const multiply = function(array) {
  return array.reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(n) {
	let total = 1;
  for (let x = 1; x <= n; x++) {
    total *= x;
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
