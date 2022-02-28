const repeatString = function(string, num) {
    if (Math.sign(num) >= 0) {
        return string.repeat(num)
      }
      else {
        return 'ERROR';
      }
};

// Do not edit below this line
module.exports = repeatString;
