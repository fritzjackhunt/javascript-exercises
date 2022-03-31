const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function([x, y, ...z]) {
	const numbers = [x, y, ...z]

  function myFunc(total, num) {
      return total + num;
  }

  if (x === undefined) {
    return 0;

  } else if (y === undefined) {
    return x;

  } else {
    var red = numbers.reduce(myFunc);
    return red;
  }
};

const multiply = function([x, y, ...z]) {
	const numbers = [x, y, ...z];

  function myFunc(total, num) {
      return total * num;
  }

  if (x === undefined) {
    return 0;

  } else if (y === undefined) {
    return x;

  } else {
    var red = numbers.reduce(myFunc);
    return red;
  }
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
	var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
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
