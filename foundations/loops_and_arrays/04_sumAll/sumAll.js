function sumAll(arg1, arg2) {
  if (
    arg1 < 0 ||
    arg2 < 0 ||
    !Number.isInteger(arg1) ||
    !Number.isInteger(arg2)
  ) {
    return "ERROR";
  }

  let sum = 0;

  for (let i = Math.min(arg1, arg2); i <= Math.max(arg1, arg2); i++) {
    sum += i;
  }

  return sum;
}

// Do not edit below this line
module.exports = sumAll;
