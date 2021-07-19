const removeFromArray = function(numbersArg , ...minus) {
    let numArray = Array.from(numbersArg);
    let minusArray = minus;
    var i = 0;
    while (i < numArray.length) {
      if (minusArray.indexOf(numArray[i]) > -1) {
        numArray.splice(i, 1);
      } else {
        ++i;
      }
    }
    return numArray;
  //  numArray.splice(0, , minusArray); 
  //  console.log(minusArray);
   // console.log(numArray);
  //  console.log("Hello world");
   // return numArray;
};

console.log(removeFromArray(['z', 'a', 'b', 'c', 'd', 2], 2, 3, 56, 'a', 'z' ))


module.exports = removeFromArray;
