const fibonacci = function(value) {
    value = Number(value);
    if (value > 0) {       
        var values = [1]
        var firstValue = 0
        var secondValue = 1
            for (i = 1; i < value ; i++) {
                secondValue += firstValue 
                firstValue = secondValue - firstValue
                values.push(secondValue);
            };
        var finalValue = values[values.length -1];
        return(finalValue);
    } else {
        return("OOPS");
    }
};
console.log(fibonacci("5"))
module.exports = fibonacci;
