const ftoc = function(value) {
  // Formula = (value - 32) * 5/9
  subValue = value - 32;

  divFormula = 5 / 9;

  finalValue = subValue * divFormula;

  roundValue = Math.round(finalValue * 10 ) / 10;
  
  return roundValue;
};

const ctof = function(value) {
  // Formula (value * 9/5) + 32
  divFormula = 9 / 5;

  subValue = value * divFormula;

  finalValue = subValue + 32;

  roundValue = Math.round(finalValue * 10 ) / 10;
  
  return roundValue;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
