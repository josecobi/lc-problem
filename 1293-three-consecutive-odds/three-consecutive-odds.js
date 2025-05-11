/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    /* counting odds */
    let odds = 0;

    /* clooping through array */
    for (let i in arr) {
        if (arr[i] % 2 != 0) {
            odds += 1
            if (odds === 3) return true;

        } else {
            odds = 0;

        }      
    }
    return false;

};

threeConsecutiveOdds();