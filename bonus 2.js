/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let current = 1;
    let index = 0;
    
    while (k > 0) {
        if (index < arr.length && arr[index] === current) {
            index++;
        } else {
            k--;
            if (k === 0) {
                return current;
            }
        }
        current++;
    }
    return current;
};