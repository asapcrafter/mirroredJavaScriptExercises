const palindromes = function(words) {
    var alphabet = Array.from("qwertyuiopasdfghjklzxcvbnm");
    var letters = Array.from(words.toLowerCase())
    var filtered = letters.filter(item => alphabet.includes(item)) ;
    var reversed = [...filtered].reverse();
    if (reversed.join('') == filtered.join('')) {
        return(true)
    } else {
        return(false)
    };
};
// console.log(palindromes("Hell123") );

module.exports = palindromes;

/*
1. Change string to lowercase
2. Convert string to array
3. Remove any non-letter array items
4. Reverse the resulting array
5. Match and compare
*/
