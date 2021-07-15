const repeatString = function(string, times) {
        if (times < 0) {
            return 'ERROR';
        }
        else if (times == 0) {
            return '';
        }
        else {
            let totalString = string;
                for (let i = 1; i < times; i++) {
                totalString += string;
                }
            return totalString;
        }
    };

module.exports = repeatString;
