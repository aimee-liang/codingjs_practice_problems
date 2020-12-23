/* countEvens
Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1. */
function countEvens(nums){
    let total = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0){
        total += 1
        }
    }
    return total
}

/* more14
Given an array of ints, return true if the number of 1's is greater than the number of 4's */

function more14(nums){
    let one = 0
    let four = 0
    
    nums.forEach((x) => {
        if (x === 1){
        one += 1
        } else if (x == 4) {
        four += 1
        }
    }
    
    if (one > four) {
        return true
    } else if (one == four || one < four) {
        return false
    }
}

/* sum28
Given an array of ints, return true if the sum of all the 2's in the array is exactly 8. */

function sum28(nums){
    let sum = 0
    
    nums.forEach((x) => {
        if (x === 2){
            sum += 2
        }
    })
    
    if (sum === 8)return true
    return false
}

/* prependSum
Return a modified version of the input array (nums), where the first two items have been removed and one item – the sum of those two items - is added to the start of the array. */

function prependSum(nums){
    let removed = nums.splice(0, 2)
    removed = removed[0] + removed[1]
    return [removed, ...nums]
}