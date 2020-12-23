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