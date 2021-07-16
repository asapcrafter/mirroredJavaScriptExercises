const reverseString = function(str) {
    let array = str.split('');
    array.reverse('');
    let reversedArray = array.join('');
    return reversedArray;
};
module.exports = reverseString;
