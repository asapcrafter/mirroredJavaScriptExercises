const sumAll = function(value1, value2) {
    if (value1 < 0 || value2 < 0) {
        return "ERROR";
    } else if (!(typeof(value1) === 'number' && typeof(value2) === 'number')) {
        return "ERROR";
    } else if (value1 > value2) {
        var sum = value2;
        for (let i = value2; i < value1  ; i++) {
            sum += (i + 1);
        }
        return sum; 
    } 
    else {
        var sum = value1;
        for (let i = value1; i < value2  ; i++) {
            sum += (i + 1);
        }
        return sum;
    }
};

module.exports = sumAll;

console.log(sumAll(3,'hello'));

/*  let i = value1
    let sum = i + (i + 1)

    value1 = 5 then i = 5
    sum = 5 + (5+1) then 

    i = 2; 0 += 2+3 = 5
    i = 3; 5 += 3 + 4 = 12 BUT i = 3; 3 + 4 
*/