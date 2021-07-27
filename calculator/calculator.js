const add = function(a,b) {
  return(a + b);
};

const subtract = function(a, b) {
	return(a - b);
};

const sum = function(arr) {
  if (arr.length === 0 ) {
    return(0);
  } else {
    var result = arr.reduce((total, num) => total + num);
    return(result);
  }
};

const multiply = function(arr) {
  result = arr.reduce((total, num) => total * num);
  return(result);
};

const power = function(a, b) {
	result = Math.pow(a,b);
  return(result);
};

const factorial = function(x) {
	if (x == 0) {
    return(1);
  } else {
    var total = x
    for (i = x ; i > 1 ; i--) {
      total *= (i - 1) 
    }
    return(total);
  }
};
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
