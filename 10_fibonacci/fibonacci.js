const fibonacci = function(num) {

    if (num === "1") {
        return 1;
    }

    if ( num < 0 ) {
        return "OOPS";
    }

    if(num < 2) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    } 
};

// Do not edit below this line
module.exports = fibonacci;
