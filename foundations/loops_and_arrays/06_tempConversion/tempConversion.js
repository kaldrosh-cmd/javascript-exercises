function convertToCelsius(temp) {
  const result = ((temp - 32) * 5) / 9;
  return Number(result.toFixed(1));
}

function convertToFahrenheit(temp) {
  const result = (temp * 9) / 5 + 32;
  return Number(result.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
